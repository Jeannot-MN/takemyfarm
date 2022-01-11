import { Field, InputType } from "type-graphql";
import { OrderItemInput } from "./OrderItemInput";

@InputType()
export class CompleteOrderInput {

    @Field()
    userId: number;

    @Field(() => [OrderItemInput])
    items: OrderItemInput[]

    @Field()
    totalAmountInCents: number

    @Field()
    paymentToken: string;
}