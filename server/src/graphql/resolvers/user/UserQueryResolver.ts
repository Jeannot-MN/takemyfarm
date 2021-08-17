import { Query, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { UserService } from "../../../service/user/UserService";
import { UserDTO } from "../../types/user/UserDTO";

@Resolver()
export class UserQueryResolver {

    private userService: UserService;

    constructor(){
        this.userService = Container.get(UserService)
    }

    @Query(() => [UserDTO])
    async users() {
        const users = await this.userService.findAll();
        return users;
    }
}