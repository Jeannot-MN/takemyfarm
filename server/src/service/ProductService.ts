import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Paginate } from "../domain/entities/Paginate";
import { Product } from "../domain/entities/Product";
import { ProductRepository } from "../domain/repositories/ProductRepository";

@Service()
export class ProductService {

    private productRepository: ProductRepository;

    constructor(@InjectRepository() productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    public findById(id: number): Promise<Product  | undefined> {
        return this.productRepository.findById(id);
    }

    public findAll(): Promise<Product[]> {
        return this.productRepository.findAll();
    }

    public query(q: string): Promise<Product[]> {
        return this.productRepository.query(q);
    }

    public save(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }

    public search(q:string, first:number, after:number, sellerId: number): Promise<Paginate<Product>>{
        return this.productRepository.search(q, first, after, sellerId);
    }
}