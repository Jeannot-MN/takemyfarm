import { Field, ObjectType } from "type-graphql";
import { UserDTO } from "../user/UserDTO";

@ObjectType()
export class LoginPayload {

    constructor(user: UserDTO, token: string) {
        this.user = user;
        this.token = token;
    }

    @Field()
    token: string;

    @Field()
    user: UserDTO;
}