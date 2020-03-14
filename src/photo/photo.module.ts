import { Module, Global } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports:[
    TypeOrmModule.forFeature([Photo])
  ],
  controllers: [PhotoController],
  providers: [PhotoService]
})
export class PhotoModule {}
