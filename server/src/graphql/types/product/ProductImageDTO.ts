import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ProductImageDTO {

    @Field()
    url: string;
}