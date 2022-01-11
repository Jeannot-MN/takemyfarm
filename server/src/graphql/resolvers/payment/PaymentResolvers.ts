import { NonEmptyArray } from "type-graphql";
import { PaymentMutationResolver } from "./PaymentMutationResolver";

export const PaymentResolvers: NonEmptyArray<Function> = [
    PaymentMutationResolver
]