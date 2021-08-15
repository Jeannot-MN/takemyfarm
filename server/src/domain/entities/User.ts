import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    private surname: string;

    private email: string;

    private mobileNumber: string;

    private password: string;

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

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }
}