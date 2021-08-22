import { Field, InputType } from "type-graphql";


@InputType()
export class RegisterUserInput {

    @Field()
    name: string;

    @Field()
    surname: string;

    @Field()
    email: string;

    @Field()
    mobileNumber: string;

    @Field()
    password: string;
}