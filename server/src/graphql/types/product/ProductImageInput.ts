import { Field, InputType } from "type-graphql";

@InputType()
export class ProductImageInput {
    
    @Field()
    url: string;
}