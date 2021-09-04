import { NonEmptyArray } from "type-graphql";
import { ProductQueryResolver } from "./ProductQueryResolver";

export const ProductResolvers: NonEmptyArray<Function> = [
    ProductQueryResolver
]