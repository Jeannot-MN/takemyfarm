import { Arg, Mutation, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { Product } from "../../../domain/entities/Product";
import { ProductImage } from "../../../domain/entities/ProductImage";
import { ProductVideo } from "../../../domain/entities/ProductVideo";
import { ProductService } from "../../../service/ProductService";
// import { ProductMapper } from "../../mappers/ProductMapper";
import { CreateProductInput } from "../../types/product/CreateProductInput";
import { CreateProductPayload } from "../../types/product/CreateProductPayload";

@Resolver()
export class ProductMutationResolver {

    private productService: ProductService;
    // private productMapper: ProductMapper;

    constructor() {
        this.productService = Container.get(ProductService);
        // this.productMapper = Container.get(ProductMapper);
    }


    @Mutation(() => CreateProductPayload)
    async createProduct(@Arg("input") input: CreateProductInput) {
        let product = new Product();
        product.sellerId = input.sellerId;
        product.name = input.name;
        product.description = input.description;
        product.price = input.price;
        product.category = input.category;
        product.status = "APPROVED";
        product.images = [];
        product.videos = [];

        input.images.forEach(image => {
            let productImage = new ProductImage();
            productImage.url = image.url;

            product.images.push(productImage);
        })

        input.videos.forEach(video => {
            let productVideo = new ProductVideo();
            productVideo.url = video.url;

            product.videos.push(productVideo);
        })

        product = await this.productService.save(product);

        return new CreateProductPayload(product);
    }
}