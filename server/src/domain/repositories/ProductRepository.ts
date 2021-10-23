import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Paginate } from "../entities/Paginate";
import { Product } from "../entities/Product";

@Service()
@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{

    public findAll() {
        return this.find({});
    }

    public findById(id: number) {
        return this.findOne({ id: id });
    }

    public queryAll(q: string) {
        return this.createQueryBuilder()
            .where("LOWER(name) LIKE :q", { q: `%${q.toLowerCase()}%` })
            .orWhere("LOWER(description) LIKE :q", { q: `%${q.toLowerCase()}%` })
            .getMany();
    }

    public async search(q: string, first: number, after: number): Promise<Paginate<Product>> {
        const result = await this.createQueryBuilder()
            .where("LOWER(name) LIKE :q", { q: `%${q.toLowerCase()}%` })
            .orWhere("LOWER(description) LIKE :q", { q: `%${q.toLowerCase()}%` })
            .limit(first)
            .offset(after)
            .orderBy("name")
            .getMany();

        const total = await this.count();

        return new Paginate(result, total);

    }
}