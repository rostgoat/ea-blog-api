import { Post } from '../post/post.entity';
export declare class Comment {
    comment_id: string;
    uid: string;
    content: string;
    post: Post;
    createUID(): Promise<void>;
}
