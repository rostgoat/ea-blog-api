import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { PostModule } from 'src/post/post.module';

/**
 * User Module
 */
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PostModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
