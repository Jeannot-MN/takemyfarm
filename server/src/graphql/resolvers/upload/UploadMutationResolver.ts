import { Arg, Mutation, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { StorageKeyFactory } from "../../../service/utils/storage/StorageKeyFactory";
import { StorageService } from "../../../service/utils/storage/StorageService";
import { GenerateUploadInput } from "../../types/upload/GenerateUploadInput";
import { GenerateUploadPayload } from "../../types/upload/GenerateUploadPayload";

@Resolver()
export class UploadMutationResolver {

    private storageService: StorageService;
    private bucket: string;

    constructor() {
        this.storageService = Container.get(StorageService);
        this.bucket = "public";
    }

    @Mutation(() => GenerateUploadPayload)
    async generateUpload(@Arg("input") input: GenerateUploadInput){
        const targetKey = StorageKeyFactory.build(input.uploadType);
        const putUri = await this.storageService.getPresignedPutUrl(this.bucket, targetKey);

        const payload = new GenerateUploadPayload();
        payload.key = targetKey;
        payload.putUri = putUri;
        payload.getUri = this.storageService.getUri(this.bucket, targetKey);

        return payload;
    }
}