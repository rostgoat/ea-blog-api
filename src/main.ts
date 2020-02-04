import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import 'dotenv/config';
import 'reflect-metadata';
import { UserModule } from './user/user.module';
import { usersOptions } from './swagger/swagger';

// local dev port
const port = process.env.PORT || 3000;

/**
 * API entry point
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // connecting swagger to the app
  const document = SwaggerModule.createDocument(app, usersOptions, {
    include: [UserModule],
  });

  SwaggerModule.setup('api/users', app, document);

  await app.listen(port);
  Logger.log(`Server running on port http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
