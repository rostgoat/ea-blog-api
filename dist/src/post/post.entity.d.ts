import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
import { Photo } from '../photo/photo.entity';
import { Like } from '../like/like.entity';
export declare class Post {
    post_id: string;
    uid: string;
    title: string;
    sub_title: string;
    content: string;
    created_at: Date;
    user: User;
    comments: Comment[];
    photo: Photo;
    likes: Like[];
    constructor(title?: string, content?: string);
    generateUID(): Promise<void>;
}
