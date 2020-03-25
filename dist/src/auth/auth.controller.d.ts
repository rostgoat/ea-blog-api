import { AuthService } from './auth.service';
import { UserCreateDTO } from '../user/user.create.dto';
import { UserLoginDTO } from '../user/user.login.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegistrationStatus } from './interfaces/registration-status.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: UserCreateDTO): Promise<RegistrationStatus>;
    login(loginUserDto: UserLoginDTO): Promise<LoginStatus>;
}
