import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Seller } from "../entities/Seller";

@Service()
@EntityRepository(Seller)
export class SellerRespository extends Repository<Seller>{

    public findAll() {
        return this.find({});
    }

    public findById(id: number) {
        return this.findOne({ id: id });
    }

    public findByName(name: string){
        return this.findOne({where: {name: name}});
    }
}