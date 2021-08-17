import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Role } from "./Role";

@Entity("users")
@Unique(["email"])
export class User {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private surname: string;

    @Column()
    private email: string;

    @Column()
    private mobileNumber: string;

    @Column()
    private password: string;

    @ManyToMany(() => Role, { eager: true })
    @JoinTable({
        name: "user_role",
        joinColumn: {
            name: 'userId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'roleName',
            referencedColumnName: 'name',
        }
    })
    roles: Role[];

    public getRoles(): Role[] {
        return this.roles;
    }

    public setRoles(roles: Role[]): void {
        this.roles = roles;
    }


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