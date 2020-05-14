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
const like_entity_1 = require('../like/like.entity')
const uuid_1 = require('uuid')
const bcrypt = require('bcrypt')
let User = class User {
  constructor(uid, name, email, username, password) {
    this.uid = uid || ''
    this.name = name || ''
    this.email = email || ''
    this.username = username || ''
    this.password = password || ''
  }
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
    this.uid = uuid_1.v4()
  }
  static _OPENAPI_METADATA_FACTORY() {
    return {
      user_id: { required: true, type: () => String },
      uid: { required: true, type: () => String },
      name: { required: true, type: () => String },
      email: { required: true, type: () => String },
      username: { required: true, type: () => String },
      password: { required: true, type: () => String },
      posts: {
        required: true,
        type: () => [require('../post/post.entity').Post],
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
  User.prototype,
  'user_id',
  void 0,
)
__decorate(
  [
    typeorm_1.Column({ type: 'varchar', nullable: false, unique: true }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'uid',
  void 0,
)
__decorate(
  [
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'name',
  void 0,
)
__decorate(
  [
    typeorm_1.Column({ type: 'varchar', nullable: false, unique: true }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'email',
  void 0,
)
__decorate(
  [
    typeorm_1.Column({ type: 'varchar', nullable: false, unique: true }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'username',
  void 0,
)
__decorate(
  [
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'password',
  void 0,
)
__decorate(
  [
    typeorm_1.OneToMany(
      type => post_entity_1.Post,
      post => post.user,
      {
        eager: true,
      },
    ),
    typeorm_1.JoinColumn({ name: 'post_id' }),
    __metadata('design:type', Array),
  ],
  User.prototype,
  'posts',
  void 0,
)
__decorate(
  [
    typeorm_1.OneToMany(
      type => like_entity_1.Like,
      like => like.user,
      {
        eager: true,
      },
    ),
    typeorm_1.JoinColumn({ name: 'like_id' }),
    __metadata('design:type', Array),
  ],
  User.prototype,
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
  User.prototype,
  'hashPassword',
  null,
)
User = __decorate(
  [
    typeorm_1.Entity('users'),
    __metadata('design:paramtypes', [String, String, String, String, String]),
  ],
  User,
)
exports.User = User
//# sourceMappingURL=user.entity.js.map
