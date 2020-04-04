import { Module } from '@nestjs/common'
import { MulterExtendedModule } from 'nestjs-multer-extended'
import { StorageController } from './storage.controller'
import { StorageService } from './storage.service'

@Module({
  imports: [
    MulterExtendedModule.register({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      bucket: process.env.AWS_BUCKET,
      basePath: process.env.AWS_BASE_PATH,
      fileSize: process.env.AWS_FILESIZE,
    }),
  ],
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}
