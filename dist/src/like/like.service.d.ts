import { Like } from './like.entity';
import { Repository } from 'typeorm';
import { LikeDTO } from './like.dto';
import { Promise } from 'bluebird';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';
export declare class LikeService {
    private likesRepository;
    private readonly userService;
    private readonly postService;
    constructor(likesRepository: Repository<Like>, userService: UserService, postService: PostService);
    add(data: Partial<LikeDTO>): Promise<Like>;
    edit(data: Partial<LikeDTO>): Promise<Like>;
    findOne(uid: string): Promise<Like>;
    findLikeCount(post_uid: string): Promise<Number>;
    findAllPostLikes(): Promise<Number>;
}
