import { UploadTypes } from "./UploadTypes";
import {v4 as uuidv4} from 'uuid';

export class StorageKeyFactory {
    public static build(uploadTypes: UploadTypes): string {
        const reference = uuidv4().replace('-','');
        switch (uploadTypes) {
            case UploadTypes.USER_PROFILE:
                return `user/${reference}`;
            case UploadTypes.SELLER_BANNER:
                return `seller/${reference}`;
            case UploadTypes.PRODUCT_IMAGE:
            case UploadTypes.PRODUCT_VIDEO:
                return `product/${reference}`;
            default:
                throw new Error("Invalid Type");
        }
    }
}