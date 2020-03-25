import { PhotoService } from './photo.service';
export declare class PhotoController {
    private photoService;
    constructor(photoService: PhotoService);
    create(file: any): Promise<Partial<import("../user/user.dto").UserDTO> | Partial<import("../post/post.dto").PostDTO> | Partial<import("./photo.dto").PhotoDTO> | Partial<import("../like/like.dto").LikeDTO>>;
}
