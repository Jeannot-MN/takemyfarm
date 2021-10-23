import { FieldResolver, Resolver, Root } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { SellerService } from "../../../service/SellerService";
import { ProductDTO } from "../../types/product/ProductDTO";
import { SellerDTO } from "../../types/seller/SellerDTO";

//@ts-ignore
@Resolver(of => ProductDTO)
export class ProductResolver {

    private sellerService: SellerService;

    constructor() {
        this.sellerService = Container.get(SellerService);
    }

    @FieldResolver(()=> SellerDTO)
    public async seller(@Root() product: ProductDTO) {
        return await this.sellerService.findById(product.sellerId);
    }
}