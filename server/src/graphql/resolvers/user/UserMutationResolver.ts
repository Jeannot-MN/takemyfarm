import { RegisterUserInput } from "../../../graphql/types/user/RegisterUserInput";
import { UserService } from "../../../service/user/UserService";
import { Mutation, Query, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";

@Resolver()
export class UserMutationResolver {

    private userService: UserService;

    constructor(){
        this.userService = Container.get(UserService)
    }

    @Mutation(() => Boolean)
    registerUser(input: RegisterUserInput) {

    }

    @Query(() => String)
    async users() {
        const users = await this.userService.findAll();
        return users[0].getName();
    }
}