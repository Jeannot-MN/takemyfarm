import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./OrderItem";

@Entity("order")
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sellerId: number;

    @Column()
    userId: number;

    @OneToMany(() => OrderItem, item => item.order, { eager: true, cascade: true })
    items: OrderItem[];
}