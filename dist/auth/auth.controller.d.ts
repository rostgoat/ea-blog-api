import { AuthService } from './auth.service';
import { UserCreateDTO } from '../user/dto/user.create.dto';
import { UserLoginDTO } from '../user/dto/user.login.dto';
import { LoginStatus } from './dto/login-status.dto';
import { RegistrationStatus } from './dto/registration-status.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: UserCreateDTO): Promise<RegistrationStatus>;
    login(loginUserDto: UserLoginDTO): Promise<LoginStatus>;
}
