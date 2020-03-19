import { Controller, Body, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { LikeDTO } from './like.dto';
import { LikeService } from './like.service';

/**
 * Like Controller
 */
@ApiTags('posts')
@Controller('likes')
export class LikeController {
    constructor(private likesService: LikeService) {}

  /**
   * Like a post
   * @param data Object
   */
  @Post('like')
  @ApiCreatedResponse({
    status: 201,
    description: 'The post has been successfully liked.',
    type: LikeDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: LikeDTO) {
    try {
      return this.likesService.like(data);
    } catch (error) {
      throw new Error(error);
    }
  }
}
