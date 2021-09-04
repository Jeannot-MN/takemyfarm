import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Product } from "../domain/entities/Product";
import { ProductRepository } from "../domain/repositories/ProductRepository";

@Service()
export class ProductService {

    private productRepository: ProductRepository;

    constructor(@InjectRepository() productRepository: ProductRepository) {
        this.productRepository = productRepository;
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
}