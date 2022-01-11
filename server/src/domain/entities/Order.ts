import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./OrderItem";

@Entity("order")
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    totalAmount: number;

    @OneToMany(() => OrderItem, item => item.order, { eager: true, cascade: true })
    items: OrderItem[];
}