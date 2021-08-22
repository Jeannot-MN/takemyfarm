export interface  Product {
    readonly id: string;
    readonly name: string;
    readonly description: string | null;
    readonly price: number;
    readonly status: string;
    images: ReadonlyArray<ProductImage>;
    readonly sellerId: string;
}

interface ProductImage {
    readonly id: string;
    readonly description: string | null;
    readonly uri: string;
}