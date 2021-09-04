import { Request } from "express";
import { Service } from "typedi";
import { Container } from "typeorm-typedi-extensions";
import { UserService } from "../../service/UserService";
import { JWTService } from "../../service/utils/JWTService";
import { GraphqlContext } from "./GraphqlContext";

@Service()
export class GraphqlContextBuilder {

    private userService: UserService;
    private jwtService: JWTService;

    constructor() {
        this.userService = Container.get(UserService);
        this.jwtService = Container.get(JWTService);
    }

    public async build(httpRequest: Request): Promise<GraphqlContext> {
        const authHeader = httpRequest.headers.authorization;
        if (authHeader) {
            const token = authHeader.split("Bearer ")[1];

            const userEmail = this.jwtService.decodeToken(token);
            const user = await this.userService.findByEmail(userEmail);

            // user?.getRoles().forEach(role => console.log(role.getName()));

            return {
                request: httpRequest,
                user: user ? user : null
            };
        } else {
            return {
                request: httpRequest,
                user: null
            };
        }
    }
}