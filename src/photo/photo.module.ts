import { Module, Global } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';

@Global()
@Module({
  controllers: [PhotoController],
  providers: [PhotoService]
})
export class PhotoModule {}
