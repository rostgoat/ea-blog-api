import { User } from 'src/user/user.entity';
export declare class LikeDTO {
    like_id: string;
    uid: string;
    liked_at: Date;
    post_liked: Boolean;
    post_uid: string;
    user_uid: string;
    user: User;
}
