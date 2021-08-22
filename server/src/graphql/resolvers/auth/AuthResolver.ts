import { Arg, Mutation, NonEmptyArray, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Container } from "typeorm-typedi-extensions";
import { UserService } from "../../../service/user/UserService";
import { JWTService } from "../../../service/utils/JWTService";
import { PasswordEnconderService } from "../../../service/utils/PasswordEnconderService";
import { LoginInput } from "../../types/auth/LoginInput";
import { LoginPayload } from "../../types/auth/LoginPayload";

@Service()
@Resolver()
class AuthResolver {

    private userService: UserService;
    private passwordEnconderService: PasswordEnconderService;
    private jwtService: JWTService;

    constructor() {
        this.userService = Container.get(UserService);
        this.passwordEnconderService = Container.get(PasswordEnconderService);
        this.jwtService = Container.get(JWTService);
    }

    @Mutation(() => LoginPayload)
    async login(@Arg("input") input: LoginInput) {
        const user = await this.userService.findByEmail(input.email);

        if (user) {
            const valid = await this.passwordEnconderService.match(input.password, user.password);
            if (valid) {
                const token = this.jwtService.generateToken(user);
                return new LoginPayload(user.email, token);
            } else {
                throw new Error("Invalid credentials.");
            }
        } else {
            throw new Error("Invalid credentials.");
        }
    }
}

export const AuthResolvers: NonEmptyArray<Function> = [AuthResolver];