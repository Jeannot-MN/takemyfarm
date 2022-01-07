import { Field, ObjectType } from "type-graphql";
import { ProductImageDTO } from "./ProductImageDTO";
import { ProductVideoDTO } from "./ProductVideoDTO";

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

    @Field({ nullable: true})
    image: string;

    images: ProductImageDTO[];

    videos: ProductVideoDTO[];
}