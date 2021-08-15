import { Field, ObjectType } from "type-graphql";
import { UserDTO } from "./UserDTO";

@ObjectType()
export class RegisterUserPayload {

    constructor(user: UserDTO) {
        this.user = user;
    }
    
    @Field()
    private user: UserDTO;

    public getUser(): UserDTO {
        return this.user;
    }

    public setUser(user: UserDTO): void {
        this.user = user;
    }
}