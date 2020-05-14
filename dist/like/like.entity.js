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
const uuid_1 = require('uuid')
const post_entity_1 = require('../post/post.entity')
const user_entity_1 = require('../user/user.entity')
let Like = class Like {
  async generateUID() {
    this.uid = uuid_1.v4()
    this.liked_at = new Date()
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      like_id: { required: true, type: () => String },
      uid: { required: true, type: () => String },
      liked_at: { required: true, type: () => Date },
      post_liked: { required: true, type: () => Object },
      post: { required: true, type: () => require('../post/post.entity').Post },
      user: { required: true, type: () => require('../user/user.entity').User },
    }
  }
}
__decorate(
  [typeorm_1.PrimaryGeneratedColumn('uuid'), __metadata('design:type', String)],
  Like.prototype,
  'like_id',
  void 0,
)
__decorate(
  [
    typeorm_1.Column({ type: 'varchar', nullable: false, unique: true }),
    __metadata('design:type', String),
  ],
  Like.prototype,
  'uid',
  void 0,
)
__decorate(
  [typeorm_1.Column({ type: 'date' }), __metadata('design:type', Date)],
  Like.prototype,
  'liked_at',
  void 0,
)
__decorate(
  [typeorm_1.Column({ type: 'bool' }), __metadata('design:type', Boolean)],
  Like.prototype,
  'post_liked',
  void 0,
)
__decorate(
  [
    typeorm_1.ManyToOne(
      type => post_entity_1.Post,
      post => post.likes,
      {
        cascade: true,
      },
    ),
    typeorm_1.JoinColumn({ name: 'post_id' }),
    __metadata('design:type', post_entity_1.Post),
  ],
  Like.prototype,
  'post',
  void 0,
)
__decorate(
  [
    typeorm_1.ManyToOne(
      type => user_entity_1.User,
      user => user.likes,
      {
        cascade: true,
      },
    ),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata('design:type', user_entity_1.User),
  ],
  Like.prototype,
  'user',
  void 0,
)
__decorate(
  [
    typeorm_1.BeforeInsert(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise),
  ],
  Like.prototype,
  'generateUID',
  null,
)
Like = __decorate([typeorm_1.Entity('likes')], Like)
exports.Like = Like
//# sourceMappingURL=like.entity.js.map
