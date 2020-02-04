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

import { CommentService } from './comment.service';
import { CommentDTO } from './comment.dto';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  /**
   * Create a comment
   * @param data Object
   */
  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'The comment has been successfully created.',
    type: CommentDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: CommentDTO) {
    try {
      return this.commentService.add(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Edit a comment
   * @param data Object
   */
  @Put(':id')
  @ApiCreatedResponse({
    status: 201,
    description: 'A comment has been successfully updated.',
    type: CommentDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(
    @Param('id') comment_id: string,
    @Body() data: Partial<CommentDTO>,
  ) {
    try {
      return this.commentService.edit(comment_id, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Remove a comment
   * @param data Object
   */
  @Delete(':id')
  @ApiCreatedResponse({
    status: 201,
    description: 'A comment has been successfully deleted.',
    type: CommentDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('id') comment_id: string) {
    try {
      return this.commentService.delete(comment_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get all comments related to a post
   */
  @Get()
  @ApiCreatedResponse({
    status: 201,
    description: 'All comments have been successfully retreived.',
    type: [CommentDTO],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAllByPost(@Param('id') post_id: string, @Response() res: any) {
    try {
      return this.commentService.findAllByPostID(post_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get a specific comment
   * @param comment_id String
   */
  @Get(':id')
  @ApiCreatedResponse({
    status: 201,
    description: 'A comment has been successfully retreived.',
    type: CommentDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findOne(@Param('id') comment_id: string) {
    try {
      return this.commentService.findOne(comment_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
