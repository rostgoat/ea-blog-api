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
var ConfigService_1
Object.defineProperty(exports, '__esModule', { value: true })
const path_1 = require('path')
const dotenv = require('dotenv')
const fs_1 = require('fs')
const common_1 = require('@nestjs/common')
let ConfigService = (ConfigService_1 = class ConfigService {
  constructor() {
    this.logger = new common_1.Logger(ConfigService_1.name)
    this.nodeEnv = process.env.NODE_ENV
      ? process.env.NODE_ENV.trim()
      : undefined
    this.logger.log('SERVICE INIT')
    switch (this.nodeEnv) {
      case 'test':
        this.envPath = path_1.resolve(__dirname, '../../.env.test')
        break
      default:
        throw new Error('Specify the NODE_ENV variable')
    }
    this.envConfig = dotenv.parse(fs_1.readFileSync(this.envPath))
  }
  get(key) {
    return this.envConfig[key]
  }
})
ConfigService = ConfigService_1 = __decorate(
  [common_1.Injectable(), __metadata('design:paramtypes', [])],
  ConfigService,
)
exports.ConfigService = ConfigService
//# sourceMappingURL=config.service.js.map
