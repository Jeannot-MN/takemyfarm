import { Arg, Query, Resolver } from "type-graphql";
import Container from "typedi";
import { ProductService } from "../../../service/ProductService";
import { ProductMapper } from "../../mappers/ProductMapper";
import { ProductDTO } from "../../types/product/ProductDTO";
import { ProductPaginatedRespone } from "../../types/product/ProductPaginatedRespone";

@Resolver()
export class ProductQueryResolver {

    private productService: ProductService;
    private productMapper: ProductMapper;

    constructor() {
        this.productService = Container.get(ProductService);
        this.productMapper = Container.get(ProductMapper);
    }

    @Query(() => ProductPaginatedRespone)
    async products(@Arg("q", { nullable: true }) q: string, @Arg("first", { nullable: true }) first: number, @Arg("after", { nullable: true }) after: number) {
        const { data, total } = await this.productService.search(q || '', first || 5, after || 0);

        return new ProductPaginatedRespone(this.productMapper.productsToProductDTOs(data), total);
    }

    @Query(() => ProductDTO)
    async productById(@Arg("id", { nullable: false }) id: number){
        const product = await this.productService.findById(id); 
        if(product){
            return this.productMapper.produtToProductDTO(product);
        }

        return null;
    }

}