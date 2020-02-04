import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import 'dotenv/config';
import 'reflect-metadata';
import { UserModule } from './user/user.module';
import { usersOptions, postsOptions, commentsOptions } from './swagger/swagger';

// local dev port
const port = process.env.PORT || 3000;

/**
 * API entry point
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // connecting user docs to swagger
  const userDocument = SwaggerModule.createDocument(app, usersOptions, {
    include: [UserModule],
  });

  // connecting blog posts docs to swagger
  const postDocument = SwaggerModule.createDocument(app, postsOptions, {
    include: [UserModule],
  });

  // connecting comments docs to swagger
  const commentDocument = SwaggerModule.createDocument(app, commentsOptions, {
    include: [UserModule],
  });

  // defining docs routes
  SwaggerModule.setup('api/users', app, userDocument);
  SwaggerModule.setup('api/posts', app, postDocument);
  SwaggerModule.setup('api/comments', app, commentDocument);

  await app.listen(port);
  Logger.log(`Server running on port http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
