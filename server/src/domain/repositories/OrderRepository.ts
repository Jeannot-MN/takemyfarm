import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Order } from "../entities/Order";
// import { Paginate } from "../entities/Paginate";

@Service()
@EntityRepository(Order)
export class OrderRepository extends Repository<Order>{

    public findAll() {
        return this.find({});
    }

    public findById(id: number) {
        return this.findOne({ id: id });
    }

/*     public queryAll(q: string) {
        return this.createQueryBuilder("product")
            .where("(LOWER(name) LIKE :q OR LOWER(description) LIKE :q)", { q: `%${q.toLowerCase()}%` })
            .leftJoinAndSelect("product.images", "image")
            .leftJoinAndSelect("product.videos", "video")
            .getMany();
    }

    public async search(q: string, first: number, after: number, sellerId: number): Promise<Paginate<Product>> {
        let result;
        let total;

        if (sellerId) {
            result = await this.createQueryBuilder("product")
                .where({ sellerId: sellerId })
                .andWhere("(LOWER(name) LIKE :q OR LOWER(description) LIKE :q)", { q: `%${q.toLowerCase()}%` })
                .limit(first)
                .offset(after)
                .orderBy("name")
                .leftJoinAndSelect("product.images", "image")
                .leftJoinAndSelect("product.videos", "video")
                .getMany();

            total = await this.count({ sellerId: sellerId });
        } else {
            result = await this.createQueryBuilder("product")
                .where("(LOWER(name) LIKE :q OR LOWER(description) LIKE :q)", { q: `%${q.toLowerCase()}%` })
                .limit(first)
                .offset(after)
                .orderBy("name")
                .leftJoinAndSelect("product.images", "image")
                .leftJoinAndSelect("product.videos", "video")
                .getMany();

            total = await this.count();
        }

        return new Paginate(result, total);

    } */
}