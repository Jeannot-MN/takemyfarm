import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./ProductImage";
import { ProductVideo } from "./ProductVideo";

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

    @OneToMany(() => ProductImage, image => image.product, { eager: true, cascade: true })
    images: [];

    @OneToMany(() => ProductVideo, video => video.product, { eager: true, cascade: true })
    videos: [];
}