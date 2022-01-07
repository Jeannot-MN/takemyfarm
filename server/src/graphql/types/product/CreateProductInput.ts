import { Field, InputType } from "type-graphql";
import { ProductImageInput } from "./ProductImageInput";
import { ProductVideoInput } from "./ProductVideoInput";

@InputType()
export class CreateProductInput {

    @Field()
    sellerId: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    price: number;

    @Field()
    category: string;

    @Field(()=> [ProductImageInput])
    images: ProductImageInput[];

    @Field(()=> [ProductVideoInput])
    videos: ProductVideoInput[];
}