'use strict'
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
Object.defineProperty(exports, '__esModule', { value: true })
const common_1 = require('@nestjs/common')
const typeorm_1 = require('@nestjs/typeorm')
const config_1 = require('@nestjs/config')
const user_module_1 = require('./user/user.module')
const comment_module_1 = require('./comment/comment.module')
const post_module_1 = require('./post/post.module')
const auth_module_1 = require('./auth/auth.module')
const like_module_1 = require('./like/like.module')
const storage_module_1 = require('./storage/storage.module')
const serve_static_1 = require('@nestjs/serve-static')
const path_1 = require('path')
let AppModule = class AppModule {}
AppModule = __decorate(
  [
    common_1.Module({
      imports: [
        typeorm_1.TypeOrmModule.forRoot(),
        config_1.ConfigModule.forRoot({ isGlobal: true }),
        user_module_1.UserModule,
        comment_module_1.CommentModule,
        post_module_1.PostModule,
        auth_module_1.AuthModule,
        like_module_1.LikeModule,
        storage_module_1.StorageModule,
        serve_static_1.ServeStaticModule.forRoot({
          rootPath: path_1.join(__dirname, '..', 'public'),
        }),
        config_1.ConfigModule,
      ],
      exports: [
        user_module_1.UserModule,
        comment_module_1.CommentModule,
        post_module_1.PostModule,
      ],
      providers: [],
    }),
  ],
  AppModule,
)
exports.AppModule = AppModule
//# sourceMappingURL=app.module.js.map
