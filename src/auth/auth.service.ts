import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserCreateDTO } from 'src/user/user.create.dto';
import { UserLoginDTO } from 'src/user/user.login.dto';
import { UserDTO } from 'src/user/user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegistrationStatus } from './interfaces/registration-status.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: UserCreateDTO): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };
    try {
      await this.usersService.add(userDto);
    } catch (err) {
      status = { success: false, message: err };
    }
    return status;
  }

  async login(loginUserDto: UserLoginDTO): Promise<LoginStatus> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);
    return { username: user.username, ...token };
  }

  private _createToken({ username }: UserDTO): any {
    const user: Partial<JwtPayload> = { username };
    const accessToken = this.jwtService.sign(user);
    return { expiresIn: process.env.EXPIRESIN, accessToken };
  }

  async validateUser(payload: JwtPayload): Promise<UserDTO> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
