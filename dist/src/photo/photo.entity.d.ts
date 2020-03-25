import { Post } from '../post/post.entity';
export declare class Photo {
    photo_id: string;
    uid: string;
    path: string;
    title: string;
    post: Post;
    generateUID(): Promise<void>;
}
