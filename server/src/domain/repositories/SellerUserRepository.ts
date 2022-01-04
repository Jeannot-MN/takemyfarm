import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { SellerUser } from "../entities/SellerUser";

@Service()
@EntityRepository(SellerUser)
export class SellerUserRepository extends Repository<SellerUser> {

    public findByUserId(userId: number) {
        return this.findOne({ where: { userId: userId } });
    }

    public findBySellerId(sellerId: number) {
        return this.findOne({ where: { sellerId: sellerId } });
    }
}