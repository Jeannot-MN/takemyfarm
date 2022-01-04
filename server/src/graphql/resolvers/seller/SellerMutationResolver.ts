import { Arg, Mutation, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { Address } from "../../../domain/entities/Address";
import { Roles } from "../../../domain/entities/Roles";
import { Seller } from "../../../domain/entities/Seller";
import { SellerStatuses } from "../../../domain/entities/SellerStatuses";
import { SellerUser } from "../../../domain/entities/SellerUser";
import { User } from "../../../domain/entities/User";
import { UserRole } from "../../../domain/entities/UserRole";
import { SellerService } from "../../../service/SellerService";
import { SellerUserService } from "../../../service/SellerUserService";
import { UserRoleService } from "../../../service/UserRoleService";
import { UserService } from "../../../service/UserService";
import { PasswordEnconderService } from "../../../service/utils/PasswordEnconderService";
import { UserMapper } from "../../mappers/UserMapper";
import { RegisterSellerInput } from "../../types/seller/RegisterSellerInput";
import { RegisterSellerPayload } from "../../types/seller/RegisterSellerPayload";

@Resolver()
export class SellerMutationResolver {

    private sellerService: SellerService;
    private userService: UserService;
    private userRoleService: UserRoleService;
    private sellerUserService: SellerUserService;
    private passwordEnconderService: PasswordEnconderService;
    private userMapper: UserMapper;

    constructor() {
        this.sellerService = Container.get(SellerService);
        this.userService = Container.get(UserService);
        this.passwordEnconderService = Container.get(PasswordEnconderService);
        this.userMapper = Container.get(UserMapper);
        this.userRoleService = Container.get(UserRoleService);
        this.sellerUserService = Container.get(SellerUserService);
    }

    @Mutation(() => RegisterSellerPayload)
    async registerSeller(@Arg("input") input: RegisterSellerInput) {
        let seller = await this.saveSeller(input);

        if (seller.id) {
            let user = await this.saveUser(input);
            await this.saveSellerUser(user, seller);
            await this.saveUserRole(user);
        }

        return new RegisterSellerPayload(seller.id);
    }

    private async saveSeller(input: RegisterSellerInput) {
        let seller = new Seller();
        seller.name = input.name;
        seller.description = input.description;
        seller.email = input.email;
        seller.mobileNumber = input.mobileNumber;
        seller.status = SellerStatuses.APPROVED;

        let address = new Address();
        address.street = input.address.street;
        address.suburb = input.address.suburb;
        address.city = input.address.city;
        address.province = input.address.province;
        address.postCode = input.address.postCode;

        seller.address = address;

        seller = await this.sellerService.save(seller);
        return seller;
    }

    private async saveUserRole(user: User) {
        let userRole = new UserRole();
        userRole.userId = user.id;
        userRole.roleName = Roles.SELLER;

        await this.userRoleService.save(userRole);
    }

    private async saveSellerUser(user: User, seller: Seller) {
        let sellerUser = new SellerUser();
        sellerUser.userId = user.id;
        sellerUser.sellerId = seller.id;

        await this.sellerUserService.save(sellerUser);
    }

    private async saveUser(input: RegisterSellerInput) {
        let user = this.userMapper.registerUserInputToUser(input.user);

        const hashedPassword = await this.passwordEnconderService.encode(input.user.password);
        user.password = hashedPassword;

        user = await this.userService.save(user);
        return user;
    }
}