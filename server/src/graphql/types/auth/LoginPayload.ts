import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LoginPayload {

    constructor(email: string, token: string) {
        this.email = email;
        this.token = token;
    }

    @Field()
    token: string;

    @Field()
    email: string;
}