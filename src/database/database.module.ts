import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

/**
 * This module is currently only used for integration tests, allowing the tests
 * to write data to an actual instance of postgres
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
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
})
export class DatabaseModule { }
