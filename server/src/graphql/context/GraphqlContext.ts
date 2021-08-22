import { Request } from "express";
import { User } from "../../domain/entities/User";

export type GraphqlContext = {

    request: Request;

    user: User | null;
}