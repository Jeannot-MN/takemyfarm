import { Ctx, Query, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { UserService } from "../../../service/UserService";
import { GraphqlContext } from "../../context/GraphqlContext";
// import { UserMapper } from "../../mappers/UserMapper";
import { UserDTO } from "../../types/user/UserDTO";

@Resolver()
export class UserQueryResolver {

    private userService: UserService;
    // private userMapper: UserMapper;

    constructor(){
        this.userService = Container.get(UserService);
        // this.userMapper = Container.get(UserMapper);
    }

    @Query(() => [UserDTO])
    async users() {
        const users = await this.userService.findAll();
        return users;
    }

    @Query(() => UserDTO, {nullable: true})
    async me(@Ctx() context: GraphqlContext){
        return context.user;
    }
}