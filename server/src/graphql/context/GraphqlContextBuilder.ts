import { Request } from "express";
import { Service } from "typedi";
import { Container } from "typeorm-typedi-extensions";
import { User } from "../../domain/entities/User";
import { UserService } from "../../service/user/UserService";
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

    public getA(): string {return "Hello"}

    public build(httpRequest: Request): GraphqlContext {
        
        console.log(httpRequest.headers);
        
        return new GraphqlContext(httpRequest, new User());
    }
}