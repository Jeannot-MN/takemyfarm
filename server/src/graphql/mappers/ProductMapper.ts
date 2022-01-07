import { Service } from "typedi";
import { Product } from "../../domain/entities/Product";
import { ProductDTO } from "../types/product/ProductDTO";

@Service()
export class ProductMapper {

    public produtToProductDTO(source: Product): ProductDTO {
        const target = new ProductDTO();
        target.id = source.id;
        target.name = source.name;
        target.description = source.description;
        target.price = source.price;
        target.image = source.image;
        target.sellerId = source.sellerId;
        target.status = source.status;
        target.category = source.category;
        target.images = source.images;
        target.videos = source.videos;

        return target;
    }

    public productsToProductDTOs(source: Product[]): ProductDTO[] {
        const target: ProductDTO[] = source.map(product => this.produtToProductDTO(product))
        return target;
    }
}