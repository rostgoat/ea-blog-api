import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';

import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { PhotoModule } from './photo/photo.module';
import { LikeModule } from './like/like.module';


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
    PhotoModule,
    MulterModule.register({
      dest: './uploads/'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    LikeModule,
  ],
  exports: [UserModule, CommentModule, PostModule],
  providers: [],
})
export class AppModule {}
