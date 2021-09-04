import { Arg, Query, Resolver } from "type-graphql";
import Container from "typedi";
import { ProductService } from "../../../service/ProductService";
import { ProductMapper } from "../../mappers/ProductMapper";
import { ProductDTO } from "../../types/product/ProductDTO";

@Resolver()
export class ProductQueryResolver {

    private productService: ProductService;
    private productMapper: ProductMapper;

    constructor() {
        this.productService = Container.get(ProductService);
        this.productMapper = Container.get(ProductMapper);
    }

    @Query(() => [ProductDTO])
    async products(@Arg("q") q: string) {
        const products = await this.productService.query(q);
        return this.productMapper.productsToProductDTOs(products);
    }
}