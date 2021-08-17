import { NonEmptyArray } from "type-graphql";
import { Role } from "./Role";
import { User } from "./User";
import { UserRole } from "./UserRole";

export const Entities: NonEmptyArray<Function> = [
    User,
    Role,
    UserRole
]