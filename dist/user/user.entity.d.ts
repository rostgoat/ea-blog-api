import { Post } from '../post/post.entity';
import { Like } from 'src/like/like.entity';
export declare class User {
    user_id: string;
    uid: string;
    name: string;
    email: string;
    username: string;
    password: string;
    posts: Post[];
    likes: Like[];
    constructor(name?: string, posts?: []);
    hashPassword(): Promise<void>;
}