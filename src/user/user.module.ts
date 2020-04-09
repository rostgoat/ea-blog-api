/**
 * * Nest Modules
 */
import { Module, forwardRef, Global } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

/**
 * * Controllers
 */
import { UserController } from './user.controller'

/**
 * * Services
 */
import { UserService } from './user.service'

/**
 * * Entities
 */
import { User } from './user.entity'

/**
 * * Modules
 */
import { PostModule } from '../post/post.module'

/**
 * * Gateways
 */
import { AppGateway } from '../app.gateway'

/**
 * User Module
 */
@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => PostModule)],
  controllers: [UserController],
  providers: [UserService, AppGateway],
  exports: [UserService],
})
export class UserModule {}
