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

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  /**
   * Create a comment
   * @param data Object
   */
  @Post()
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
  async delete(@Param('id') comment_id: string) {
    try {
      return this.commentService.delete(comment_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get all comments
   */
  @Get()
  async find(@Response() res: any) {
    try {
      return this.commentService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get a specific comment
   * @param comment_id String
   */
  @Get(':id')
  async findOne(@Param(':id') comment_id: string) {
    try {
      return this.commentService.findOne(comment_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
