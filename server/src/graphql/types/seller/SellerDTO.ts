import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SellerDTO {

    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    bannerImage: string;

    @Field()
    email: string;

    @Field()
    mobileNumber: string;

    @Field()
    status: string;
}