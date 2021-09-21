import { Field, ObjectType } from "type-graphql";
import { ProductDTO } from "./ProductDTO";

@ObjectType()
export class ProductPaginatedRespone {

    constructor(data: ProductDTO[], total: number) {
        this.data = data;
        this.total = total;
    }

    @Field()
    total: number;

    @Field(()=> [ProductDTO])
    data: ProductDTO[];
}