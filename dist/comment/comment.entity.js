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
const openapi = require('@nestjs/swagger')
const typeorm_1 = require('typeorm')
const post_entity_1 = require('../post/post.entity')
const uuid_1 = require('uuid')
let Comment = class Comment {
  async createUID() {
    this.uid = uuid_1.v4()
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      comment_id: { required: true, type: () => String },
      uid: { required: true, type: () => String },
      content: { required: true, type: () => String },
      post: { required: true, type: () => require('../post/post.entity').Post },
    }
  }
}
__decorate(
  [typeorm_1.PrimaryGeneratedColumn('uuid'), __metadata('design:type', String)],
  Comment.prototype,
  'comment_id',
  void 0,
)
__decorate(
  [
    typeorm_1.Column({ type: 'varchar', nullable: false, unique: true }),
    __metadata('design:type', String),
  ],
  Comment.prototype,
  'uid',
  void 0,
)
__decorate(
  [typeorm_1.Column('text'), __metadata('design:type', String)],
  Comment.prototype,
  'content',
  void 0,
)
__decorate(
  [
    typeorm_1.ManyToOne(
      type => post_entity_1.Post,
      post => post.comments,
    ),
    typeorm_1.JoinColumn({ name: 'post_id' }),
    __metadata('design:type', post_entity_1.Post),
  ],
  Comment.prototype,
  'post',
  void 0,
)
__decorate(
  [
    typeorm_1.BeforeInsert(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise),
  ],
  Comment.prototype,
  'createUID',
  null,
)
Comment = __decorate([typeorm_1.Entity('comments')], Comment)
exports.Comment = Comment
//# sourceMappingURL=comment.entity.js.map
