import { PhotoDTO } from './photo.dto';
import { Photo } from './photo.entity';
import { Repository } from 'typeorm';
export declare class PhotoService {
    private photoRepository;
    constructor(photoRepository: Repository<Photo>);
    add(data: Partial<PhotoDTO>): Promise<Partial<import("../user/user.dto").UserDTO> | Partial<import("../post/post.dto").PostDTO> | Partial<PhotoDTO> | Partial<import("../like/like.dto").LikeDTO>>;
    private resizeImage;
    findOneByUID(uid: string): Promise<Photo>;
}
