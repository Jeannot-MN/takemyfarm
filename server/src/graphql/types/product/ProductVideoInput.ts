import { Field, InputType } from "type-graphql";

@InputType()
export class ProductVideoInput {
    
    @Field()
    url: string;
}