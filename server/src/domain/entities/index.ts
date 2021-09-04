import { NonEmptyArray } from "type-graphql";
import { Product } from "./Product";
import { Role } from "./Role";
import { Seller } from "./Seller";
import { User } from "./User";
import { UserRole } from "./UserRole";

export const Entities: NonEmptyArray<Function> = [
    User,
    Role,
    UserRole,
    Seller,
    Product,
]