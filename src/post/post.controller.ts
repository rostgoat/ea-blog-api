import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Response,
} from '@nestjs/common';

import { PostService } from './post.service';
import { PostDTO } from './post.dto';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

/**
 * Post Controller
 */
@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  /**
   * Create a post
   * @param data Object
   */
  @Post('create')
  @ApiCreatedResponse({
    status: 201,
    description: 'The post has been successfully created.',
    type: PostDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: PostDTO) {
    try {
      return this.postService.add(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Edit a post
   * @param data Object
   */
  @Put(':id')
  @ApiCreatedResponse({
    status: 201,
    description: 'A post has been successfully updated.',
    type: PostDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(@Param('id') post_id: string, @Body() data: Partial<PostDTO>) {
    try {
      return this.postService.edit(post_id, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Remove a post
   * @param data Object
   */
  @Delete(':id')
  @ApiCreatedResponse({
    status: 201,
    description: 'A post has been successfully deleted.',
    type: PostDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('id') post_id: string) {
    try {
      return this.postService.delete(post_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get all posts related to a user
   */
  @Get()
  @ApiCreatedResponse({
    status: 201,
    description: 'All posts have been successfully retreived.',
    type: [PostDTO],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAllByPost(@Param('id') user_id: string, @Response() res: any) {
    try {
      return this.postService.findAllByPostID(user_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get all posts from all users
   */
  @Get('find')
  @ApiCreatedResponse({
    status: 201,
    description: 'All posts have been successfully retreived.',
    type: [PostDTO],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async find() {
    try {
      return this.postService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get a specific post
   * @param post_id String
   */
  @Get(':id')
  @ApiCreatedResponse({
    status: 201,
    description: 'A post has been successfully retreived.',
    type: PostDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findOne(@Param('id') post_id: string) {
    try {
      return this.postService.findOne(post_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
