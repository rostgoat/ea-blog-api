import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { AppGateway } from './app.gateway';
import { AuthModule } from './auth/auth.module';

/**
 * Root Module
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    CommentModule,
    PostModule,
    AuthModule,
  ],
  exports: [UserModule, CommentModule, PostModule],
  providers: [],
})
export class AppModule {}
