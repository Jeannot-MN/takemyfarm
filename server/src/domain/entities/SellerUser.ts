import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seller_user")
export class SellerUser {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    sellerId: number;
}