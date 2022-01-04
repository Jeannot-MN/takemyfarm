import { Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { ProductService } from "../../../service/ProductService";
import { ProductMapper } from "../../mappers/ProductMapper";

@Resolver()
export class ProductMutationResolver {

    private productService: ProductService;
    private productMapper: ProductMapper;

    constructor() {
        this.productService = Container.get(ProductService);
        this.productMapper = Container.get(ProductMapper);
    }


}