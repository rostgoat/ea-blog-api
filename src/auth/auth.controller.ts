/**
 * * Nest Modules
 */
import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common'

/**
 * * Services
 */
import { AuthService } from './auth.service'

/**
 * * DTOs
 */
import { UserCreateDTO } from '../user/dto/user.create.dto'
import { UserLoginDTO } from '../user/dto/user.login.dto'
import { LoginStatus } from './dto/login-status.dto'
import { RegistrationStatus } from './dto/registration-status.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(
    @Body() createUserDto: UserCreateDTO,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createUserDto,
    )
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST)
    }
    return result
  }

  @Post('login')
  public async login(@Body() loginUserDto: UserLoginDTO): Promise<LoginStatus> {
    return await this.authService.login(loginUserDto)
  }
}
