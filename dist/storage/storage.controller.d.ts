import { StorageService } from './storage.service';
export declare class StorageController {
    private storageService;
    constructor(storageService: StorageService);
    uploadFile(file: any): any;
    signedUrl(req: any): Promise<string>;
}
