import { Field, ObjectType } from "type-graphql";
import AddressDTO from "../address/AddressDTO";

@ObjectType()
export class SellerDTO {

    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field({nullable: true})
    bannerImage: string;

    @Field()
    email: string;

    @Field()
    mobileNumber: string;

    @Field()
    status: string;

    @Field()
    address: AddressDTO;
}