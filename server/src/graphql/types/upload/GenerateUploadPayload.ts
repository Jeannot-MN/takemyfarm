import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GenerateUploadPayload {

    @Field()
    putUri: string;

    @Field()
    getUri: string;

    @Field()
    key: string;
}