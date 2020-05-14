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
Object.defineProperty(exports, '__esModule', { value: true })
const common_1 = require('@nestjs/common')
const aws_sdk_1 = require('aws-sdk')
let s3 = new aws_sdk_1.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: '2006-03-01',
  s3ForcePathStyle: true,
})
aws_sdk_1.config.region = process.env.AWS_REGION
aws_sdk_1.config.setPromisesDependency(require('bluebird').Promise)
let StorageService = class StorageService {
  constructor() {}
  getSignedUrl(bucket, key) {
    let params = {
      Bucket: bucket,
      Key: key,
    }
    return s3.getSignedUrl('getObject', params)
  }
}
StorageService = __decorate(
  [common_1.Injectable(), __metadata('design:paramtypes', [])],
  StorageService,
)
exports.StorageService = StorageService
//# sourceMappingURL=storage.service.js.map
