import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sellerId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    status: string;

    @Column()
    image: string;
}