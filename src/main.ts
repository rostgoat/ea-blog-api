import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { initDocumentation } from './config/swagger';
import 'reflect-metadata';
require('dotenv').config()

// local dev port
const port = process.env.PORT;

/**
 * API entry point
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // defining swagger docs routes
  initDocumentation('api', app, 'common');
  initDocumentation('api/users', app, 'users');
  initDocumentation('api/posts', app, 'posts');
  initDocumentation('api/likes', app, 'likes');
  initDocumentation('api/auth', app, 'auth');
  initDocumentation('api/photos', app, 'photos');
  initDocumentation('api/comments', app, 'comments');

  app.enableCors();
  await app.listen(port);

  if (process.env.NODE_ENV !== 'production') Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
