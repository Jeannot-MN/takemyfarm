import { NonEmptyArray } from "type-graphql";
import { SellerMutationResolver } from "./SellerMutationResolver";

export const SellerResolvers: NonEmptyArray<Function> = [
    SellerMutationResolver
]