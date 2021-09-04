import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ProductDTO {

    @Field()
    id: number;

    @Field()
    sellerId: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    price: number;

    @Field()
    status: string;

    @Field()
    image: string;
}