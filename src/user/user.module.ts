import { Module, forwardRef, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { PostModule } from '../post/post.module';

/**
 * User Module
 */
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => PostModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
