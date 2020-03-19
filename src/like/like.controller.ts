import { Controller, Body, Post, Put, Get } from '@nestjs/common';
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
      return this.likesService.add(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Unlike a post
   * @param data Object
   */
  @Put('unlike')
  @ApiCreatedResponse({
    status: 201,
    description: 'The post has been successfully unliked.',
    type: LikeDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async unlike(@Body() data: LikeDTO) {
    try {
      return this.likesService.edit(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Relike a post
   * @param data Object
   */
  @Put('relike')
  @ApiCreatedResponse({
    status: 201,
    description: 'The post has been successfully reliked.',
    type: LikeDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async relike(@Body() data: LikeDTO) {
    try {
      return this.likesService.edit(data);
    } catch (error) {
      throw new Error(error);
    }
  }

    /**
   * Get all likes for a post
   */
  @Get('likes')
  @ApiCreatedResponse({
    status: 201,
    description: 'All likes have been successfully retreived.',
    type: [LikeDTO],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAndCount() {
    try {
      return this.likesService.findLikeCount();
    } catch (error) {
      throw new Error(error);
    }
  }

}
