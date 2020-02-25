import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { AppGateway } from './app.gateway';

/**
 * Root Module
 */
@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, CommentModule, PostModule],
  exports: [UserModule, CommentModule, PostModule],
  providers: [AppGateway],
})
export class AppModule {}
