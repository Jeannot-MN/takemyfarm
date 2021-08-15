import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LoginPayload {
    
    constructor(email: string, token: string) {
        this.email = email;
        this.token = token;
    }

    @Field()
    private token: string;

    @Field()
    private email: string;

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }


    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }
}