/**
 * * Nest Modules
 */
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, HttpException, HttpStatus } from '@nestjs/common'

/**
 * * Dependencies
 */
import { ExtractJwt, Strategy } from 'passport-jwt'

/**
 * * Services
 */
import { AuthService } from './auth.service'

/**
 * * DTOs
 */
import { UserDTO } from '../user/dto/user.dto'
import { JwtPayload } from './dto/jwt-payload.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETKEY,
    })
  }

  async validate(payload: JwtPayload): Promise<UserDTO> {
    const user = await this.authService.validateUser(payload)
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
    }
    return user
  }
}
