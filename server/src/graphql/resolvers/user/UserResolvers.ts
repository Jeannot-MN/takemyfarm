import { NonEmptyArray } from "type-graphql";
import { UserMutationResolver } from "./UserMutationResolver";
import { UserQueryResolver } from "./UserQueryResolver";
import { UserResolver } from "./UserResolver";

export const UserResolvers: NonEmptyArray<Function> = [
    UserQueryResolver,
    UserMutationResolver,
    UserResolver
]