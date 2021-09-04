import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";

@Service()
@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{

    public findAll() {
        return this.find({});
    }

    public query(q: string){
        return this.createQueryBuilder()
        .where("LOWER(name) LIKE :q", {q: `%${q.toLowerCase()}%`})
        .orWhere("LOWER(description) LIKE :q", {q: `%${q.toLowerCase()}%`})
        .getMany();
    }
}