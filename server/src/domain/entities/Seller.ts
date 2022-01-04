import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Address } from "./Address";

@Entity("seller")
@Unique(["name"])
export class Seller {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    bannerImage: string;

    @Column()
    email: string;

    @Column()
    mobileNumber: string;

    @Column()
    status: string;

    @OneToOne(() => Address, { eager: true, cascade: true })
    @JoinColumn()
    address: Address;
}