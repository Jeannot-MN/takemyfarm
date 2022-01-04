import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class RegisterSellerPayload {

    constructor(sellerId: number) {
        this.sellerId = sellerId;
    }
    
    @Field()
    sellerId: number;
}