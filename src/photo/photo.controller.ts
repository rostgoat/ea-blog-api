import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import {FileInterceptor} from '@nestjs/platform-express'
import { PhotoService } from './photo.service';
import { multerOptions } from 'src/config/multer';

@ApiTags('photos')
@Controller('photos')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

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
  async create(@UploadedFile() file: any) {
    console.log("Photo controller: ", file)
    try {
      return this.photoService.add(file);
    } catch (error) {
      throw new Error(error);
    }
  }
}
