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
const swagger_1 = require('@nestjs/swagger')
class LoginStatus {
  static _OPENAPI_METADATA_FACTORY() {
    return {
      username: { required: true, type: () => String },
      accessToken: { required: true, type: () => Object },
      expiresIn: { required: true, type: () => Object },
      name: { required: true, type: () => String },
      uid: { required: true, type: () => String },
    }
  }
}
__decorate(
  [
    swagger_1.ApiProperty({
      description: "User's username",
      type: String,
    }),
    __metadata('design:type', String),
  ],
  LoginStatus.prototype,
  'username',
  void 0,
)
__decorate(
  [
    swagger_1.ApiProperty({
      description: 'JSON Web Token',
      type: String,
    }),
    __metadata('design:type', Object),
  ],
  LoginStatus.prototype,
  'accessToken',
  void 0,
)
__decorate(
  [
    swagger_1.ApiProperty({
      description: 'Token expiry date',
      type: String,
    }),
    __metadata('design:type', Object),
  ],
  LoginStatus.prototype,
  'expiresIn',
  void 0,
)
__decorate(
  [
    swagger_1.ApiProperty({
      description: "User's name",
      type: String,
    }),
    __metadata('design:type', String),
  ],
  LoginStatus.prototype,
  'name',
  void 0,
)
__decorate(
  [
    swagger_1.ApiProperty({
      description: "User's uid",
      type: String,
    }),
    __metadata('design:type', String),
  ],
  LoginStatus.prototype,
  'uid',
  void 0,
)
exports.LoginStatus = LoginStatus
//# sourceMappingURL=login-status.dto.js.map
