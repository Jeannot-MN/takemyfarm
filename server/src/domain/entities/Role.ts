import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryColumn()
    private name: string;

    @Column()
    private description: string;

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}