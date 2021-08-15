import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {

    @Field()
    private email: string;

    @Field()
    private password: string;

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

}