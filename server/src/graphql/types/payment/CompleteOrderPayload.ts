import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CompleteOrderPayload {

    @Field()
    successful: boolean;

    constructor(successful: boolean){
        this.successful = successful;
    }

}