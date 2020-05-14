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
Object.defineProperty(exports, '__esModule', { value: true })
const common_1 = require('@nestjs/common')
const typeorm_1 = require('@nestjs/typeorm')
let DatabaseModule = class DatabaseModule {}
DatabaseModule = __decorate(
  [
    common_1.Module({
      imports: [
        typeorm_1.TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DATABASE_HOST,
          port: Number(process.env.DATABASE_PORT),
          username: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          entities: ['dist/**/*.entity{.ts,.js}'],
          dropSchema: false,
          synchronize: !(process.env.NODE_ENV.trim() === 'production'),
          logging: false,
        }),
      ],
    }),
  ],
  DatabaseModule,
)
exports.DatabaseModule = DatabaseModule
//# sourceMappingURL=database.module.js.map
