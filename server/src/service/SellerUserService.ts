import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { SellerUser } from "../domain/entities/SellerUser";
import { SellerUserRepository } from "../domain/repositories/SellerUserRepository";

@Service()
export class SellerUserService {

    private sellerUserRepository: SellerUserRepository;

    constructor(@InjectRepository() sellerUserRepository: SellerUserRepository) {
        this.sellerUserRepository = sellerUserRepository;
    }

    public save(sellerUser: SellerUser): Promise<SellerUser> {
        return this.sellerUserRepository.save(sellerUser);
    }

    public findByUserId(userId: number): Promise<SellerUser | undefined> {
        return this.sellerUserRepository.findByUserId(userId);
    }

    public findBySellerId(sellerId: number): Promise<SellerUser | undefined> {
        return this.sellerUserRepository.findBySellerId(sellerId);
    }
}