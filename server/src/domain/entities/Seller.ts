import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("seller")
@Unique(["name"])
export class Seller {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    bannerImage: string;

    @Column()
    email: string;

    @Column()
    mobileNumber: string;

    @Column()
    status: string;
}