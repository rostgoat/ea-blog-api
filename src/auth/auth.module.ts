/**
 * * Nest Modules
 */
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

/**
 * * Controllers
 */
import { AuthController } from './auth.controller'

/**
 * * Services
 */
import { AuthService } from './auth.service'

/**
 * * Modules
 */
import { UserModule } from '../user/user.module'

/**
 * * Strategy
 */
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: { expiresIn: process.env.EXPIRESIN },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
