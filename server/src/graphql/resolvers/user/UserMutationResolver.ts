import { Arg, Mutation, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { RegisterUserInput } from "../../../graphql/types/user/RegisterUserInput";
import { UserService } from "../../../service/user/UserService";
import { PasswordEnconderService } from "../../../service/utils/PasswordEnconderService";
import { UserMapper } from "../../mappers/UserMapper";
import { RegisterUserPayload } from "../../types/user/RegisterUserPayload";

@Resolver()
export class UserMutationResolver {

    private userService: UserService;
    private userMapper: UserMapper;
    private passwordEnconderService: PasswordEnconderService;

    constructor() {
        this.userService = Container.get(UserService);
        this.userMapper = Container.get(UserMapper);
        this.passwordEnconderService = Container.get(PasswordEnconderService);
    }

    @Mutation(() => RegisterUserPayload)
    async registerUser(@Arg("input") input: RegisterUserInput) {
        const user = this.userMapper.registerUserInputToUser(input);

        const hashedPassword = await this.passwordEnconderService.encode(input.password);
        user.password = hashedPassword;

        await this.userService.save(user);
        return new RegisterUserPayload(this.userMapper.userToUserDTO(user));
    }
}