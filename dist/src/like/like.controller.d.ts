import { LikeDTO } from './like.dto';
import { LikeService } from './like.service';
export declare class LikeController {
    private likesService;
    constructor(likesService: LikeService);
    create(data: LikeDTO): Promise<any>;
    unlike(data: LikeDTO): Promise<any>;
    relike(data: LikeDTO): Promise<any>;
    findAndCount(req: any): Promise<any>;
    findAllPostLikes(): Promise<any>;
}
