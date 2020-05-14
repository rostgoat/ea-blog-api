import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './dto/user.dto';
import { UserLoginDTO } from './dto/user.login.dto';
import { UserCreateDTO } from './dto/user.create.dto';
import { PostService } from '../post/post.service';
import { Promise } from 'bluebird';
export declare class UserService {
    private userRepository;
    private postService;
    constructor(userRepository: Repository<User>, postService: PostService);
    add(userDto: Partial<UserCreateDTO>): Promise<UserDTO>;
    edit(uid: string, data: Partial<UserDTO>): Promise<User>;
    delete(uid: string): Promise<{
        deleted: boolean;
    }>;
    findAll(): Promise<User[]>;
    findOne(uid: string): Promise<User | null>;
    findByLogin({ username, password }: UserLoginDTO): Promise<UserDTO>;
    findByPayload({ username }: UserLoginDTO): Promise<UserDTO>;
    usersPostLikes(): Promise<number>;
}
