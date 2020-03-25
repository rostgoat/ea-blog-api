import { CommentService } from './comment.service';
import { CommentDTO } from './comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    create(data: CommentDTO): Promise<import("./comment.entity").Comment>;
    update(uid: string, data: Partial<CommentDTO>): Promise<import("./comment.entity").Comment>;
    delete(uid: string): Promise<{
        deleted: boolean;
    }>;
    findAllByPost(post_id: string, res: any): Promise<import("./comment.entity").Comment[]>;
    findOne(uid: string): Promise<import("./comment.entity").Comment>;
}
