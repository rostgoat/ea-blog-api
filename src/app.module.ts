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
const env = require('dotenv')
env.config()

const production = process.env.NODE_ENV === 'production';

/**
 * Root Module
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      url: process.env.NODE_ENV === 'production' ? process.env.EA_PROD_DATABASE_URL : '',
      type: 'postgres',
      host: process.env.NODE_ENV === 'production' ? process.env.EA_PROD_DATABASE_HOST : process.env.EA_DATABASE_HOST,
      port: 5432,
      username: process.env.NODE_ENV === 'production' ? process.env.EA_PROD_DATABASE_USERNAME : process.env.EA_DATABASE_USERNAME,
      password: process.env.NODE_ENV === 'production' ? process.env.EA_PROD_DATABASE_PASSWORD : process.env.EA_DATABASE_PASSWORD,
      database: process.env.NODE_ENV === 'production' ? process.env.EA_PROD_DATABASE_NAME : process.env.EA_DATABASE_NAME,
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
      extra: {
        ssl: true
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
