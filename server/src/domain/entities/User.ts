import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    constructor(name: string){
        this.name = name;
    }

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

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
}