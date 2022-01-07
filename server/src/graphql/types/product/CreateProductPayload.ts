import { Field, ObjectType } from "type-graphql";
import { ProductDTO } from "./ProductDTO";

@ObjectType()
export class CreateProductPayload {

    @Field()
    product: ProductDTO;

    constructor(product: ProductDTO){
        this.product = product;
    }
}