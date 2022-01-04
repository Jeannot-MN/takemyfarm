import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class AddressDTO {

    @Field()
    street: string;

    @Field()
    suburb: string;

    @Field()
    city: string;

    @Field()
    postCode: string;

    @Field({nullable: true})
    province: string;
}