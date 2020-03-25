import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<UserDTO>;
}
export {};
