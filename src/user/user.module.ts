import { Module, forwardRef, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { PostModule } from '../post/post.module';
import { AppGateway } from '../app.gateway';

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
