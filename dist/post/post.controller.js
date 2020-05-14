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
const swagger_1 = require('@nestjs/swagger')
const post_service_1 = require('./post.service')
const post_dto_1 = require('./dto/post.dto')
let PostController = class PostController {
  constructor(postService) {
    this.postService = postService
  }
  async create(data) {
    try {
      return this.postService.add(data)
    } catch (error) {
      throw new Error(error)
    }
  }
  async update(uid, data) {
    try {
      return this.postService.edit(uid, data)
    } catch (error) {
      throw new Error(error)
    }
  }
  async delete(uid) {
    try {
      return this.postService.delete(uid)
    } catch (error) {
      throw new Error(error)
    }
  }
  async findAllByPost(user_id, res) {
    try {
      return this.postService.findAllByPostID(user_id)
    } catch (error) {
      throw new Error(error)
    }
  }
  async find() {
    try {
      const posts = await this.postService.findAll()
      return posts
    } catch (error) {
      throw new Error(error)
    }
  }
  async findOne(req) {
    try {
      const { uid } = req.query
      return this.postService.findOne(uid)
    } catch (error) {
      throw new Error(error)
    }
  }
}
__decorate(
  [
    common_1.Post('create'),
    swagger_1.ApiCreatedResponse({
      status: 201,
      description: 'The post has been successfully created.',
      type: post_dto_1.PostDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.Body()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Promise),
  ],
  PostController.prototype,
  'create',
  null,
)
__decorate(
  [
    common_1.Put(':uid'),
    swagger_1.ApiCreatedResponse({
      status: 201,
      description: 'A post has been successfully updated.',
      type: post_dto_1.PostDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: require('./post.entity').Post }),
    __param(0, common_1.Param('uid')),
    __param(1, common_1.Body()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, Object]),
    __metadata('design:returntype', Promise),
  ],
  PostController.prototype,
  'update',
  null,
)
__decorate(
  [
    common_1.Delete(':uid'),
    swagger_1.ApiCreatedResponse({
      status: 201,
      description: 'A post has been successfully deleted.',
      type: post_dto_1.PostDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('uid')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', Promise),
  ],
  PostController.prototype,
  'delete',
  null,
)
__decorate(
  [
    common_1.Get(),
    swagger_1.ApiCreatedResponse({
      status: 201,
      description: 'All posts have been successfully retreived.',
      type: [post_dto_1.PostDTO],
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Response()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, Object]),
    __metadata('design:returntype', Promise),
  ],
  PostController.prototype,
  'findAllByPost',
  null,
)
__decorate(
  [
    common_1.Get('find'),
    swagger_1.ApiCreatedResponse({
      status: 201,
      description: 'All posts have been successfully retreived.',
      type: [post_dto_1.PostDTO],
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise),
  ],
  PostController.prototype,
  'find',
  null,
)
__decorate(
  [
    common_1.Get(':uid'),
    swagger_1.ApiCreatedResponse({
      status: 201,
      description: 'A post has been successfully retreived.',
      type: post_dto_1.PostDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Req()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Promise),
  ],
  PostController.prototype,
  'findOne',
  null,
)
PostController = __decorate(
  [
    swagger_1.ApiTags('posts'),
    common_1.Controller('posts'),
    __metadata('design:paramtypes', [post_service_1.PostService]),
  ],
  PostController,
)
exports.PostController = PostController
//# sourceMappingURL=post.controller.js.map
