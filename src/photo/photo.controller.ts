import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import {FileInterceptor} from '@nestjs/platform-express'

@ApiTags('photos')
@Controller('photos')
export class PhotoController {

    /**
   * Create a photo
   * @param data Object
   */
  @Post('upload')
  @ApiCreatedResponse({
    status: 201,
    description: 'The photo has been successfully created.',
  })

  @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@UploadedFile() file: any) {
    console.log("Photo controller: ", file)
  }
}
