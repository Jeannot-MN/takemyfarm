import { Field, InputType } from "type-graphql";

@InputType()
export default class AddressInput {

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