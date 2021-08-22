import { Field, ObjectType } from "type-graphql";
import { UserDTO } from "./UserDTO";

@ObjectType()
export class RegisterUserPayload {

    constructor(user: UserDTO) {
        this.user = user;
    }

    @Field()
    user: UserDTO;
}