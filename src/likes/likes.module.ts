import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { Likes } from './likes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Likes])
  ],
  providers: [LikesService],
  controllers: [LikesController],
  exports: [LikesService]
})
export class LikesModule {}
