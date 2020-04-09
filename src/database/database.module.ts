import { Module } from '@nestjs/common'
import { ConfigModule } from '../config/config.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '../config/config.service'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: Number(configService.get('DATABASE_PORT')),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        dropSchema: false,
        // ! ALWAYS FALSE IN PROD
        synchronize: !(process.env.NODE_ENV.trim() === 'production'),
        logging: false,
        extra: {
          ssl: true,
        },
      }),
    }),
  ],
})
export class DatabaseModule {}
