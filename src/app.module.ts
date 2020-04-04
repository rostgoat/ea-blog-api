import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { CommentModule } from './comment/comment.module'
import { PostModule } from './post/post.module'
import { AuthModule } from './auth/auth.module'
import { LikeModule } from './like/like.module'
import { StorageModule } from './storage/storage.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
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
    LikeModule,
    StorageModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  exports: [UserModule, CommentModule, PostModule],
  providers: [],
})
export class AppModule {}
