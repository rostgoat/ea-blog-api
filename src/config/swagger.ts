import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'
import { CommentModule } from '../comment/comment.module'
import { PostModule } from '../post/post.module'
import { UserModule } from '../user/user.module'
import { AuthModule } from '../auth/auth.module'
import { LikeModule } from '../like/like.module'

/**
 * This file contains all the Swagger API docs for every schema type
 */
const DESCRIPTION = 'The Game Bible Blog API'
const VERSION = '1.0.0'

// User API methods
const commonOptions = new DocumentBuilder()
  .setTitle('All API Methods')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()

// User API methods
const usersOptions = new DocumentBuilder()
  .setTitle('Users')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()

// Blog Posts API methods
const postsOptions = new DocumentBuilder()
  .setTitle('Posts')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()

// Comments API methods
const commentsOptions = new DocumentBuilder()
  .setTitle('Comments')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()

// Likes API methods
const likesOptions = new DocumentBuilder()
  .setTitle('Likes')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()

// Authentication API methods
const authOptions = new DocumentBuilder()
  .setTitle('Authentication')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()

/**
 * Return module and options for Swagger docs
 * @param route Route
 */
const getModuleAndOptions = (route: string) => {
  switch (route) {
    case 'common':
      return { options: commonOptions }
    case 'users':
      return { options: usersOptions, mod: UserModule }
    case 'posts':
      return { options: postsOptions, mod: PostModule }
    case 'comments':
      return { options: commentsOptions, mod: CommentModule }
    case 'auth':
      return { options: authOptions, mod: AuthModule }
    case 'likes':
      return { options: likesOptions, mod: LikeModule }
  }
}

/**
 * Create swagger docs modules
 *
 * @param app Nest App
 * @param route Mdoule Route Name
 * @param endpoint Swagger API endpoint
 */
export const initDocumentation = (
  endpoint: string,
  app: INestApplication,
  route: string,
) => {
  const { options, mod } = getModuleAndOptions(route)

  const document = SwaggerModule.createDocument(app, options, {
    include: [mod] ? [mod] : [],
  })
  SwaggerModule.setup(endpoint, app, document)
}
