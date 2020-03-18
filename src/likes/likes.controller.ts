import { Controller, Body, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { LikesDTO } from './likes.dto';
import { LikesService } from './likes.service';

/**
 * Likes Controller
 */
@ApiTags('posts')
@Controller('likes')
export class LikesController {
    constructor(private likesService: LikesService) {}

  /**
   * Like a post
   * @param data Object
   */
  @Post('like')
  @ApiCreatedResponse({
    status: 201,
    description: 'The post has been successfully liked.',
    type: LikesDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: LikesDTO) {
    try {
      return this.likesService.like(data);
    } catch (error) {
      throw new Error(error);
    }
  }
}
