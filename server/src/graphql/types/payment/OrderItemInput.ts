import { Field, InputType } from "type-graphql";

@InputType()
export class OrderItemInput {

    @Field()
    productId: number;

    @Field()
    quantity: number;
}