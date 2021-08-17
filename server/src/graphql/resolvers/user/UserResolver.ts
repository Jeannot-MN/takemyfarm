import { NonEmptyArray } from "type-graphql";
import { UserMutationResolver } from "./UserMutationResolver";
import { UserQueryResolver } from "./UserQueryResolver";

export const UserResolvers: NonEmptyArray<Function> = [
    UserQueryResolver,
    UserMutationResolver
]