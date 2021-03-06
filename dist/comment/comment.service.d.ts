import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentDTO } from './dto/comment.dto';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';
export declare class CommentService {
    private commentRepository;
    private readonly postService;
    private readonly userService;
    constructor(commentRepository: Repository<Comment>, postService: PostService, userService: UserService);
    add(data: Partial<CommentDTO>): Promise<Comment>;
    edit(uid: string, data: Partial<CommentDTO>): Promise<Comment>;
    delete(uid: string): Promise<{
        deleted: boolean;
    }>;
    findAllByPostID(post_uid: string): Promise<Comment[]>;
    findOne(uid: string): Promise<Comment>;
}
