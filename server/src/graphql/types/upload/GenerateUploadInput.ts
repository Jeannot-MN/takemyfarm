import { Field, InputType } from "type-graphql";
import { UploadTypes } from "../../../service/utils/storage/UploadTypes";

@InputType()
export class GenerateUploadInput {

    @Field()
    uploadType: UploadTypes
}