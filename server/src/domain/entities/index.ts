import { NonEmptyArray } from "type-graphql";
import { Address } from "./Address";
import { Product } from "./Product";
import { ProductImage } from "./ProductImage";
import { ProductVideo } from "./ProductVideo";
import { Role } from "./Role";
import { Seller } from "./Seller";
import { SellerUser } from "./SellerUser";
import { User } from "./User";
import { UserRole } from "./UserRole";

export const Entities: NonEmptyArray<Function> = [
    User,
    Role,
    UserRole,
    Seller,
    Product,
    Address,
    SellerUser,
    ProductImage,
    ProductVideo
]