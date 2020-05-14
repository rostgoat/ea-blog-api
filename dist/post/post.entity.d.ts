import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
import { Like } from '../like/like.entity';
export declare class Post {
    post_id: string;
    uid: string;
    title: string;
    sub_title: string;
    content: string;
    created_at: Date;
    post_image_bucket_key: string;
    user: User;
    comments: Comment[];
    likes: Like[];
    constructor(uid?: string, title?: string, sub_title?: string, content?: string, created_at?: Date);
    generateUID(): Promise<void>;
}
