import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { UserCreateDTO } from './user.create.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(data: UserCreateDTO): Promise<any>;
    update(uid: string, data: Partial<UserDTO>): Promise<any>;
    find(): Promise<any>;
    findOne(uid: string): Promise<any>;
    delete(uid: string): Promise<{
        deleted: boolean;
    }>;
    findUserLikes(): Promise<number>;
}
