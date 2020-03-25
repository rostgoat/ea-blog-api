import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { PhotoModule } from './photo/photo.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LikeModule } from './like/like.module';
const parse = require('pg-connection-string').parse;
const env = require('dotenv')
env.config()

 
const config = parse(process.env.DATABASE_URL)
const connection = {
  type: "postgres",
  host: config.host,
  port: config.port,
  username: config.user,
  password: config.password,
  database: config.database,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
  extra: {
    ssl: true,
  }
}
console.log('connection', connection)

/**
 * Root Module
 */

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: config.host,
      port: config.port,
      username: config.user,
      password: config.password,
      database: config.database,
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
      extra: {
        ssl: true,
      }
    }),
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
    LikeModule,
  ],
  exports: [UserModule, CommentModule, PostModule],
  providers: [],
})
export class AppModule {}
