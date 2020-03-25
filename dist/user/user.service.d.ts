import { Promise } from 'bluebird';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';
import { PostService } from '../post/post.service';
import { UserLoginDTO } from './user.login.dto';
import { UserCreateDTO } from './user.create.dto';
export declare class UserService {
    private userRepository;
    private postService;
    constructor(userRepository: Repository<User>, postService: PostService);
    add(userDto: UserCreateDTO): Promise<UserDTO>;
    edit(uid: string, data: Partial<UserDTO>): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(uid: string): Promise<User>;
    findOneByUID(uid: string): Promise<User>;
    delete(uid: string): Promise<{
        deleted: boolean;
    }>;
    findByLogin({ username, password }: UserLoginDTO): Promise<UserDTO>;
    findByPayload({ username }: UserLoginDTO): Promise<UserDTO>;
    usersPostLikes(): Promise<number>;
}
