import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateDTO } from '../user/user.create.dto';
import { UserLoginDTO } from '../user/user.login.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegistrationStatus } from './interfaces/registration-status.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(
    @Body() createUserDto: UserCreateDTO,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createUserDto,
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login') 
  public async login(@Body() loginUserDto: UserLoginDTO): Promise<LoginStatus> {
    console.log('auth controller: login', loginUserDto)
    return await this.authService.login(loginUserDto);
  }
}
