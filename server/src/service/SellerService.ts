import { InjectRepository } from "typeorm-typedi-extensions";
import { Seller } from "../domain/entities/Seller";
import { SellerRespository } from "../domain/repositories/SellerRespository";

export class SellerService {

    private sellerRepository: SellerRespository;

    constructor(@InjectRepository() sellerRepository: SellerRespository) {
        this.sellerRepository = sellerRepository;
    }

    public findById(id: number): Promise<Seller  | undefined> {
        return this.sellerRepository.findById(id);
    }

    public findByName(name: string): Promise<Seller | undefined> {
        return this.sellerRepository.findByName(name);
    }

    public save(seller: Seller): Promise<Seller> {
        return this.sellerRepository.save(seller);
    }
}