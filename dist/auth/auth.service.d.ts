import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserCreateDTO } from 'src/user/user.create.dto';
import { UserLoginDTO } from 'src/user/user.login.dto';
import { UserDTO } from 'src/user/user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegistrationStatus } from './interfaces/registration-status.interface';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    register(userDto: UserCreateDTO): Promise<RegistrationStatus>;
    login(loginUserDto: UserLoginDTO): Promise<LoginStatus>;
    private _createToken;
    validateUser(payload: JwtPayload): Promise<UserDTO>;
}
