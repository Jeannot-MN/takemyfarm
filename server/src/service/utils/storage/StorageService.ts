import { Service } from "typedi";
import * as Minio from 'minio'

@Service()
export class StorageService {

    private storageClient: Minio.Client;

    constructor() {
        this.storageClient = new Minio.Client({
            endPoint: 'localhost',
            port: 9000,
            useSSL: false,
            accessKey: 'minio',
            secretKey: 'minio123'
        });
    }

    public putObject(bucket: string, key: string, filePath: string, metadata: Minio.ItemBucketMetadata): Promise<Minio.UploadedObjectInfo> {
        return this.storageClient.fPutObject(bucket, key, filePath, metadata);
    }

    public getPresignedPutUrl(bucket: string, key: string): Promise<string> {
        return this.storageClient.presignedPutObject(bucket, key);
    }

    public getPresignedGetUrl(bucket: string, key: string): Promise<string> {
        return this.storageClient.presignedGetObject(bucket, key);
    }

    public getUri(bucket: string, key: string): string {
        return `http://localhost:9000/${bucket}/${key}`;
    }
}