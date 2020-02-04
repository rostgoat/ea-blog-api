import { DocumentBuilder } from '@nestjs/swagger';

// Swagger docs options for user API methods
export const usersOptions = new DocumentBuilder()
  .setTitle('Users')
  .setDescription('The EA Blog API')
  .setVersion('1.0')
  .build();
