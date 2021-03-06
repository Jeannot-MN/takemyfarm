import { NonEmptyArray } from "type-graphql";
import { AuthResolvers } from "./auth/AuthResolver";
import { PaymentResolvers } from "./payment/PaymentResolvers";
import { ProductResolvers } from "./product/ProductResolvers";
import { SellerResolvers } from "./seller/SellerResolvers";
import { UploadResolvers } from "./upload/UploadResolvers";
import { UserResolvers } from "./user/UserResolvers";

export const Resolvers: NonEmptyArray<Function> = [
    ...UserResolvers,
    ...AuthResolvers,
    ...ProductResolvers,
    ...SellerResolvers,
    ...UploadResolvers,
    ...PaymentResolvers
]