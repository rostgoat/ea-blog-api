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

/**
 * Post Controller
 */
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  /**
   * Create a post
   * @param data Object
   */
  @Post()
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
  async delete(@Param('id') post_id: string) {
    try {
      return this.postService.delete(post_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get all posts
   */
  @Get()
  async find(@Response() res: any) {
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
  async findOne(@Param('id') post_id: string) {
    try {
      return this.postService.findOne(post_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
