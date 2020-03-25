import { Post } from 'src/post/post.entity';
import { User } from 'src/user/user.entity';
export declare class Like {
    like_id: string;
    uid: string;
    liked_at: Date;
    post_liked: Boolean;
    post: Post;
    user: User;
    generateUID(): Promise<void>;
}
