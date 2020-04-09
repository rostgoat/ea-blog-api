import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Response,
  Req,
} from '@nestjs/common'

import { PostService } from './post.service'
import { PostDTO } from './dto/post.dto'
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger'

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
  async create(@Body() data: Partial<PostDTO>) {
    try {
      return this.postService.add(data)
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Edit a post
   * @param uid String
   * @param data Object
   */
  @Put(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'A post has been successfully updated.',
    type: PostDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(@Param('uid') uid: string, @Body() data: Partial<PostDTO>) {
    try {
      return this.postService.edit(uid, data)
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Remove a post
   * @param uid String
   */
  @Delete(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'A post has been successfully deleted.',
    type: PostDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('uid') uid: string) {
    try {
      return this.postService.delete(uid)
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * TODO: get rid of this and add a where arg into regular find
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
      return this.postService.findAllByPostID(user_id)
    } catch (error) {
      throw new Error(error)
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
      const posts = await this.postService.findAll()
      console.log('posts', posts)
      return posts
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Get a specific post
   * @param uid String
   */
  @Get(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'A post has been successfully retreived.',
    type: PostDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findOne(@Req() req) {
    try {
      const { uid } = req.query
      return this.postService.findOne(uid)
    } catch (error) {
      throw new Error(error)
    }
  }
}
