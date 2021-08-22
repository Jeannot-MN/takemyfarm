import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserDTO {

    @Field()
    id: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    surname: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    mobileNumber: string;

    @Field({ nullable: true })
    profileImageUri: string;
}