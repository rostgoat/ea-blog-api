'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const swagger_1 = require('@nestjs/swagger')
const comment_module_1 = require('../comment/comment.module')
const post_module_1 = require('../post/post.module')
const user_module_1 = require('../user/user.module')
const auth_module_1 = require('../auth/auth.module')
const like_module_1 = require('../like/like.module')
const DESCRIPTION = 'The Game Bible Blog API'
const VERSION = '1.0.0'
const commonOptions = new swagger_1.DocumentBuilder()
  .setTitle('All API Methods')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()
const usersOptions = new swagger_1.DocumentBuilder()
  .setTitle('Users')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()
const postsOptions = new swagger_1.DocumentBuilder()
  .setTitle('Posts')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()
const commentsOptions = new swagger_1.DocumentBuilder()
  .setTitle('Comments')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()
const likesOptions = new swagger_1.DocumentBuilder()
  .setTitle('Likes')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()
const authOptions = new swagger_1.DocumentBuilder()
  .setTitle('Authentication')
  .setDescription(DESCRIPTION)
  .setVersion(VERSION)
  .build()
const getModuleAndOptions = route => {
  switch (route) {
    case 'common':
      return { options: commonOptions }
    case 'users':
      return { options: usersOptions, mod: user_module_1.UserModule }
    case 'posts':
      return { options: postsOptions, mod: post_module_1.PostModule }
    case 'comments':
      return { options: commentsOptions, mod: comment_module_1.CommentModule }
    case 'auth':
      return { options: authOptions, mod: auth_module_1.AuthModule }
    case 'likes':
      return { options: likesOptions, mod: like_module_1.LikeModule }
  }
}
exports.initDocumentation = (endpoint, app, route) => {
  const { options, mod } = getModuleAndOptions(route)
  const document = swagger_1.SwaggerModule.createDocument(app, options, {
    include: [mod] ? [mod] : [],
  })
  swagger_1.SwaggerModule.setup(endpoint, app, document)
}
//# sourceMappingURL=swagger.js.map
