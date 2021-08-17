import { Arg, Mutation, NonEmptyArray, Resolver } from "type-graphql";
import Container, { Service } from "typedi";
import { UserService } from "../../../service/user/UserService";
import { PasswordEnconderService } from "../../../service/utils/PasswordEnconderService";
import { LoginInput } from "../../types/auth/LoginInput";
import { LoginPayload } from "../../types/auth/LoginPayload";

@Service()
@Resolver()
class AuthResolver {

    private userService: UserService;
    private passwordEnconderService: PasswordEnconderService;

    constructor() {
        this.userService = Container.get(UserService);
        this.passwordEnconderService = Container.get(PasswordEnconderService);
    }

    @Mutation(() => LoginPayload)
    async login(@Arg("input") input: LoginInput) {
        const user = await this.userService.findByEmail(input.getEmail());
        if(user){
            const valid  = await this.passwordEnconderService.match(input.getPassword(), user.getPassword());
            if(valid){
                return new LoginPayload(user.getEmail(),"token");
            } else {
                throw new Error("Invalid credentials.");
            }
        } else{
            throw new Error("Invalid credentials.");
        }
    }
}

export const AuthResolvers: NonEmptyArray<Function> = [AuthResolver];