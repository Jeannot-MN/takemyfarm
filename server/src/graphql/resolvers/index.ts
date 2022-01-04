import { NonEmptyArray } from "type-graphql";
import { AuthResolvers } from "./auth/AuthResolver";
import { ProductResolvers } from "./product/ProductResolvers";
import { SellerResolvers } from "./seller/SellerResolvers";
import { UserResolvers } from "./user/UserResolvers";

export const Resolvers: NonEmptyArray<Function> = [
    ...UserResolvers,
    ...AuthResolvers,
    ...ProductResolvers,
    ...SellerResolvers
]