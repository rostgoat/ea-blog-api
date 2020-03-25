import { PostService } from './post.service';
import { PostDTO } from './post.dto';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    create(data: PostDTO): Promise<any>;
    update(uid: string, data: Partial<PostDTO>): Promise<import("./post.entity").Post>;
    delete(uid: string): Promise<{
        deleted: boolean;
    }>;
    findAllByPost(user_id: string, res: any): Promise<any>;
    find(): Promise<any>;
    findOne(req: any): Promise<any>;
}
