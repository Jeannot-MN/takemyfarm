export interface ProductImage {
    file: File;
    key: string;
    uri: string;
    uploading: boolean;
}
export interface ProductVideo {
    file: File;
    key: string;
    uri: string;
    uploading: boolean;
}

export interface ProductGeneralDetailsTab {
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface ProductImagesTab {
    images: ProductImage[];
    submitDirection: 'progress' | 'regress';
}

export interface ProductVideosTab{
    videos: ProductVideo[];
}

export interface ProductProps {
    name: string;
    description: string;
    price: number;
    category: string;
    images: ProductImage[];
    videos: ProductVideo[];
}