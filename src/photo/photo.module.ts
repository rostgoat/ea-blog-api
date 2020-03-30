import { Module, Global } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  controllers: [PhotoController],
  providers: [PhotoService],
  exports: [PhotoService]
})
export class PhotoModule {}
