import { NonEmptyArray } from "type-graphql";
import { UploadMutationResolver } from "./UploadMutationResolver";

export const UploadResolvers: NonEmptyArray<Function> = [
    UploadMutationResolver
]