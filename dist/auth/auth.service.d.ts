import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserCreateDTO } from '../user/dto/user.create.dto';
import { UserLoginDTO } from '../user/dto/user.login.dto';
import { UserDTO } from '../user/dto/user.dto';
import { JwtPayload } from './dto/jwt-payload.dto';
import { LoginStatus } from './dto/login-status.dto';
import { RegistrationStatus } from './dto/registration-status.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    register(userDto: Partial<UserCreateDTO>): Promise<RegistrationStatus>;
    login(loginUserDto: UserLoginDTO): Promise<LoginStatus>;
    private _createToken;
    validateUser(payload: JwtPayload): Promise<UserDTO>;
}
