import { NonEmptyArray } from "type-graphql";
import { ProductQueryResolver } from "./ProductQueryResolver";
import { ProductResolver } from "./ProductResolver";

export const ProductResolvers: NonEmptyArray<Function> = [
    ProductQueryResolver,
    ProductResolver
]