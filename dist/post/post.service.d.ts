import { Repository } from 'typeorm';
import { Promise } from 'bluebird';
import { Post } from './post.entity';
import { PostDTO } from './post.dto';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';
import { PhotoService } from 'src/photo/photo.service';
import { LikeService } from 'src/like/like.service';
export declare class PostService {
    private postRepository;
    private readonly userService;
    private readonly commentService;
    private readonly photoService;
    private readonly likeService;
    constructor(postRepository: Repository<Post>, userService: UserService, commentService: CommentService, photoService: PhotoService, likeService: LikeService);
    add(data: Partial<PostDTO>): Promise<Post>;
    edit(uid: string, data: Partial<PostDTO>): Promise<Post>;
    delete(uid: string): Promise<{
        deleted: boolean;
    }>;
    findAllByPostID(uid: string): Promise<Post[]>;
    findAll(): Promise<Post[]>;
    findOne(uid: string): Promise<Post>;
}
