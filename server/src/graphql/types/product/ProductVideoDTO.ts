import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ProductVideoDTO {

    @Field()
    url: string;
}