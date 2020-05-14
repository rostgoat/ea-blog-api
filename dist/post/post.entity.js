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
const user_entity_1 = require('../user/user.entity')
const comment_entity_1 = require('../comment/comment.entity')
const like_entity_1 = require('../like/like.entity')
const uuid_1 = require('uuid')
let Post = class Post {
  constructor(uid, title, sub_title, content, created_at) {
    this.uid = uid || ''
    this.title = title || ''
    this.sub_title = sub_title || ''
    this.content = content || ''
    this.created_at = created_at
  }
  async generateUID() {
    this.uid = uuid_1.v4()
    this.created_at = new Date()
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      post_id: { required: true, type: () => String },
      uid: { required: true, type: () => String },
      title: { required: true, type: () => String },
      sub_title: { required: true, type: () => String },
      content: { required: true, type: () => String },
      created_at: { required: true, type: () => Date },
      post_image_bucket_key: { required: true, type: () => String },
      user: { required: true, type: () => require('../user/user.entity').User },
      comments: {
        required: true,
        type: () => [require('../comment/comment.entity').Comment],
      },
      likes: {
        required: true,
        type: () => [require('../like/like.entity').Like],
      },
    }
  }
}
__decorate(
  [typeorm_1.PrimaryGeneratedColumn('uuid'), __metadata('design:type', String)],
  Post.prototype,
  'post_id',
  void 0,
)
__decorate(
  [
    typeorm_1.Column({ type: 'varchar', nullable: false, unique: true }),
    __metadata('design:type', String),
  ],
  Post.prototype,
  'uid',
  void 0,
)
__decorate(
  [typeorm_1.Column('text'), __metadata('design:type', String)],
  Post.prototype,
  'title',
  void 0,
)
__decorate(
  [typeorm_1.Column('text'), __metadata('design:type', String)],
  Post.prototype,
  'sub_title',
  void 0,
)
__decorate(
  [typeorm_1.Column('text'), __metadata('design:type', String)],
  Post.prototype,
  'content',
  void 0,
)
__decorate(
  [typeorm_1.Column({ type: 'date' }), __metadata('design:type', Date)],
  Post.prototype,
  'created_at',
  void 0,
)
__decorate(
  [typeorm_1.Column({ type: 'text' }), __metadata('design:type', String)],
  Post.prototype,
  'post_image_bucket_key',
  void 0,
)
__decorate(
  [
    typeorm_1.ManyToOne(
      type => user_entity_1.User,
      user => user.posts,
      {
        cascade: true,
      },
    ),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata('design:type', user_entity_1.User),
  ],
  Post.prototype,
  'user',
  void 0,
)
__decorate(
  [
    typeorm_1.OneToMany(
      type => comment_entity_1.Comment,
      comment => comment.post,
      {
        cascade: true,
      },
    ),
    typeorm_1.JoinColumn({ name: 'comment_id' }),
    __metadata('design:type', Array),
  ],
  Post.prototype,
  'comments',
  void 0,
)
__decorate(
  [
    typeorm_1.OneToMany(
      type => like_entity_1.Like,
      like => like.post,
      {
        eager: true,
      },
    ),
    typeorm_1.JoinColumn({ name: 'like_id' }),
    __metadata('design:type', Array),
  ],
  Post.prototype,
  'likes',
  void 0,
)
__decorate(
  [
    typeorm_1.BeforeInsert(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise),
  ],
  Post.prototype,
  'generateUID',
  null,
)
Post = __decorate(
  [
    typeorm_1.Entity('posts'),
    __metadata('design:paramtypes', [String, String, String, String, Date]),
  ],
  Post,
)
exports.Post = Post
//# sourceMappingURL=post.entity.js.map
