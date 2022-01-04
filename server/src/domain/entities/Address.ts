import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("address")
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    suburb: string;

    @Column()
    city: string;

    @Column()
    postCode: string;

    @Column({nullable: true})
    province: string;
}