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
const common_1 = require('@nestjs/common')
const typeorm_1 = require('@nestjs/typeorm')
const typeorm_2 = require('typeorm')
const comment_entity_1 = require('./comment.entity')
const post_service_1 = require('../post/post.service')
const user_service_1 = require('../user/user.service')
let CommentService = class CommentService {
  constructor(commentRepository, postService, userService) {
    this.commentRepository = commentRepository
    this.postService = postService
    this.userService = userService
  }
  async add(data) {
    const newComment = await this.commentRepository.create(data)
    newComment.post = await this.postService.findOne(data.post_uid)
    await this.commentRepository.save(newComment)
    return newComment
  }
  async edit(uid, data) {
    await this.commentRepository.update({ uid }, data)
    return await this.commentRepository.findOne({ uid })
  }
  async delete(uid) {
    await this.commentRepository.delete(uid)
    return { deleted: true }
  }
  async findAllByPostID(post_uid) {
    const post = await this.postService.findOne(post_uid)
    const { post_id } = post
    return await this.commentRepository.find({
      where: { post_id },
    })
  }
  async findOne(uid) {
    const foundComment = await this.commentRepository.findOne({
      where: {
        uid: uid,
      },
    })
    return foundComment
  }
}
CommentService = __decorate(
  [
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comment_entity_1.Comment)),
    __param(
      1,
      common_1.Inject(common_1.forwardRef(() => post_service_1.PostService)),
    ),
    __param(
      2,
      common_1.Inject(common_1.forwardRef(() => user_service_1.UserService)),
    ),
    __metadata('design:paramtypes', [
      typeorm_2.Repository,
      post_service_1.PostService,
      user_service_1.UserService,
    ]),
  ],
  CommentService,
)
exports.CommentService = CommentService
//# sourceMappingURL=comment.service.js.map
