import { Controller, Post, UseInterceptors, UploadedFile, Req, Get, Body } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import {FileInterceptor} from '@nestjs/platform-express'
import { PhotoService } from './photo.service';
import { multerOptions } from '../config/multer';
import Storage  from '../utils/s3'

@ApiTags('photos')
@Controller('photos')
export class PhotoController {
  private storageService: Storage
  constructor(private photoService: PhotoService
    ) {
      this.storageService = new Storage();
    }

    /**
   * Create a photo
   * @param data Object
   */
  @Post('upload')
  @ApiCreatedResponse({
    status: 201,
    description: 'The photo has been successfully created.',
  })
  @UseInterceptors(FileInterceptor('post_photo', multerOptions))
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data, @UploadedFile() file: any) {
    try {
      const user_uid = Object.values(data)
      return this.photoService.add(file, user_uid[0]);
    } catch (error) {
      throw new Error(error);
    }
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
      const { bucket, key } = req.query;
      console.log('bucket', bucket)
      console.log('key', key)
      return await this.storageService.getSignedUrl(bucket, key)
    } catch (error) {
      throw new Error(error);
    }
  }
}
