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
const nestjs_multer_extended_1 = require('nestjs-multer-extended')
const storage_controller_1 = require('./storage.controller')
const storage_service_1 = require('./storage.service')
let StorageModule = class StorageModule {}
StorageModule = __decorate(
  [
    common_1.Module({
      imports: [
        nestjs_multer_extended_1.MulterExtendedModule.register({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_REGION,
          bucket: process.env.AWS_BUCKET,
          basePath: process.env.AWS_BASE_PATH,
          fileSize: process.env.AWS_FILESIZE,
        }),
      ],
      controllers: [storage_controller_1.StorageController],
      providers: [storage_service_1.StorageService],
    }),
  ],
  StorageModule,
)
exports.StorageModule = StorageModule
//# sourceMappingURL=storage.module.js.map
