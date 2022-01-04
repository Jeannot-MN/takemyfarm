import { FieldResolver, Resolver, Root } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { SellerService } from "../../../service/SellerService";
import { SellerUserService } from "../../../service/SellerUserService";
import { SellerDTO } from "../../types/seller/SellerDTO";
import { UserDTO } from "../../types/user/UserDTO";

//@ts-ignore
@Resolver(of => UserDTO)
export class UserResolver {

    private sellerService: SellerService;
    private sellerUserService: SellerUserService;

    constructor() {
        this.sellerService = Container.get(SellerService);
        this.sellerUserService = Container.get(SellerUserService);
    }

    @FieldResolver(() => SellerDTO, { nullable: true })
    public async seller(@Root() user: UserDTO) {
        const sellerUser = await this.sellerUserService.findByUserId(user.id);
        return sellerUser ? await this.sellerService.findById(sellerUser.sellerId) : null;
    }
}