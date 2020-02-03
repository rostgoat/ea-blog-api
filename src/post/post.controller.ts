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
import { PostEntity } from './post.entity';

/**
 * Post Controller
 */
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  /**
   * Create post
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
  async findOne(@Body() data: PostDTO) {
    try {
      return this.postService.findOne(data);
    } catch (error) {
      throw new Error(error);
    }
  }
}
