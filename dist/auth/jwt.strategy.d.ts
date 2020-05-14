import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { UserDTO } from '../user/dto/user.dto';
import { JwtPayload } from './dto/jwt-payload.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<UserDTO>;
}
export {};
