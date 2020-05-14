'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const core_1 = require('@nestjs/core')
const app_module_1 = require('./app.module')
const common_1 = require('@nestjs/common')
const swagger_1 = require('./config/swagger')
require('reflect-metadata')
require('dotenv').config()
const port = process.env.PORT
async function bootstrap() {
  const app = await core_1.NestFactory.create(app_module_1.AppModule)
  swagger_1.initDocumentation('api', app, 'common')
  swagger_1.initDocumentation('api/users', app, 'users')
  swagger_1.initDocumentation('api/posts', app, 'posts')
  swagger_1.initDocumentation('api/likes', app, 'likes')
  swagger_1.initDocumentation('api/auth', app, 'auth')
  swagger_1.initDocumentation('api/comments', app, 'comments')
  app.enableCors()
  await app.listen(port)
  if (process.env.NODE_ENV !== 'production')
    common_1.Logger.log(
      `Server running on http://localhost:${port}`,
      'Bootstrap',
    )
}
bootstrap()
//# sourceMappingURL=main.js.map
