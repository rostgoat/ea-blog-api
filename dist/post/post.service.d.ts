import { Repository } from 'typeorm';
import { Promise } from 'bluebird';
import { PostDTO } from './dto/post.dto';
import { Post } from './post.entity';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';
import { LikeService } from '../like/like.service';
export declare class PostService {
    private postRepository;
    private readonly userService;
    private readonly commentService;
    private readonly likeService;
    constructor(postRepository: Repository<Post>, userService: UserService, commentService: CommentService, likeService: LikeService);
    add(data: Partial<PostDTO>): Promise<Post>;
    edit(uid: string, data: Partial<PostDTO>): Promise<Post>;
    delete(uid: string): Promise<{
        deleted: boolean;
    }>;
    findAllByPostID(uid: string): Promise<Post[]>;
    findAll(): Promise<Post[]>;
    findOne(uid: string): Promise<Post>;
}
