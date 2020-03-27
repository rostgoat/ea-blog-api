import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import 'reflect-metadata';
import { UserModule } from './user/user.module';
import {
  usersOptions,
  postsOptions,
  commentsOptions,
  commonOptions,
} from './config/swagger/swagger';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express'
import {join } from 'path';

// local dev port
const port = process.env.PORT || process.env.EA_API_PORT;
const CLENT_FILES = join(__dirname, "..", 'public');
/**
 * API entry point
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // connecting user docs to swagger
  const commonDocument = SwaggerModule.createDocument(app, commonOptions);

  // connecting user docs to swagger
  const userDocument = SwaggerModule.createDocument(app, usersOptions, {
    include: [UserModule],
  });

  // connecting blog posts docs to swagger
  const postDocument = SwaggerModule.createDocument(app, postsOptions, {
    include: [PostModule],
  });

  // connecting comments docs to swagger
  const commentDocument = SwaggerModule.createDocument(app, commentsOptions, {
    include: [CommentModule],
  });

  // defining docs routes
  SwaggerModule.setup('api', app, commonDocument);
  SwaggerModule.setup('api/users', app, userDocument);
  SwaggerModule.setup('api/posts', app, postDocument);
  SwaggerModule.setup('api/comments', app, commentDocument);

  // if (process.env.NODE_ENV === 'production') {
  //   console.log('this is production')
  //   app.use(express.static(CLENT_FILES))
  // }
  
  app.enableCors();
  await app.listen(port);
  Logger.log(`Server running on port http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
