import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Req,
} from '@nestjs/common'
import { AmazonS3FileInterceptor } from 'nestjs-multer-extended'
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger'
import { StorageService } from './storage.service'

@Controller('storage')
export class StorageController {
  constructor(private storageService: StorageService) {}

  /**
   * Upload image to bucket
   * @param data Object
   */
  @Post('upload')
  @ApiCreatedResponse({
    status: 201,
    description: 'The image has been successfully uploaded to S3.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseInterceptors(AmazonS3FileInterceptor('post_photo'))
  uploadFile(@UploadedFile() file) {
    return file.key
  }

  /**
   * Get signed url from s3 bucket
   * @param data Object
   */
  @Get('signedUrl')
  @ApiCreatedResponse({
    status: 201,
    description: 'The signed url has been successfully retreived.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signedUrl(@Req() req) {
    try {
      const { bucket, key } = req.query
      return await this.storageService.getSignedUrl(bucket, key)
    } catch (error) {
      throw new Error(error)
    }
  }
}
