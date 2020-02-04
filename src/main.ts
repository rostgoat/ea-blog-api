import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import 'dotenv/config';
import 'reflect-metadata';

// local dev port
const port = process.env.PORT || 3000;

/**
 * API entry point
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger docs options
  const options = new DocumentBuilder()
    .setTitle('EA API')
    .setDescription('The EA Blog API')
    .setVersion('1.0')
    .addTag('ea-blog')
    .build();

  // connecting swagger to the app
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(`Server running on port http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
