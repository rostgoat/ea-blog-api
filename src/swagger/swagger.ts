import { DocumentBuilder } from '@nestjs/swagger';

/**
 * This file contains all the Swagger API docs for every schema type
 */
const DESCRIPTION = 'The EA Blog API';
const VERSION = '1.0.0';

// User API methods
export const usersOptions = new DocumentBuilder()
  .setTitle('Users')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build();

// Blog Posts API methods
export const postsOptions = new DocumentBuilder()
  .setTitle('Posts')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build();

// Comments API methods
export const commentsOptions = new DocumentBuilder()
  .setTitle('Comments')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build();
