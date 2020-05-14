import { Repository } from 'typeorm';
import { Like } from './like.entity';
import { LikeDTO } from './dto/like.dto';
import { Promise } from 'bluebird';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';
export declare class LikeService {
    private likesRepository;
    private readonly userService;
    private readonly postService;
    constructor(likesRepository: Repository<Like>, userService: UserService, postService: PostService);
    add(data: Partial<LikeDTO>): Promise<Like>;
    edit(uid: string, data: Partial<LikeDTO>): Promise<Like>;
    findOne(uid: string): Promise<Like>;
    findLikeCount(post_uid: string): Promise<Number>;
    findAll(): Promise<Number>;
}
