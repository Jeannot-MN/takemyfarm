import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserDTO {

    @Field()
    private id: number;

    @Field()
    private name: string;

    @Field({nullable : true})
    private surname: string;

    @Field({nullable : true})
    private email: string;

    @Field({nullable : true})
    private mobileNumber: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public setSurname(surname: string): void {
        this.surname = surname;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getMobileNumber(): string {
        return this.mobileNumber;
    }

    public setMobileNumber(mobileNumber: string): void {
        this.mobileNumber = mobileNumber;
    }
}