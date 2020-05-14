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
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v)
  }
var __param =
  (this && this.__param) ||
  function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex)
    }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const openapi = require('@nestjs/swagger')
const common_1 = require('@nestjs/common')
const nestjs_multer_extended_1 = require('nestjs-multer-extended')
const swagger_1 = require('@nestjs/swagger')
const storage_service_1 = require('./storage.service')
let StorageController = class StorageController {
  constructor(storageService) {
    this.storageService = storageService
  }
  uploadFile(file) {
    return file.key
  }
  async signedUrl(req) {
    try {
      const { bucket, key } = req.query
      return await this.storageService.getSignedUrl(bucket, key)
    } catch (error) {
      throw new Error(error)
    }
  }
}
__decorate(
  [
    common_1.Post('upload'),
    swagger_1.ApiCreatedResponse({
      status: 201,
      description: 'The image has been successfully uploaded to S3.',
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    common_1.UseInterceptors(
      nestjs_multer_extended_1.AmazonS3FileInterceptor('post_photo'),
    ),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.UploadedFile()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', void 0),
  ],
  StorageController.prototype,
  'uploadFile',
  null,
)
__decorate(
  [
    common_1.Get('signedUrl'),
    swagger_1.ApiCreatedResponse({
      status: 201,
      description: 'The signed url has been successfully retreived.',
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, common_1.Req()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Promise),
  ],
  StorageController.prototype,
  'signedUrl',
  null,
)
StorageController = __decorate(
  [
    common_1.Controller('storage'),
    __metadata('design:paramtypes', [storage_service_1.StorageService]),
  ],
  StorageController,
)
exports.StorageController = StorageController
//# sourceMappingURL=storage.controller.js.map
