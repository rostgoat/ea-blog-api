import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Response,
} from '@nestjs/common'

import { CommentService } from './comment.service'
import { CommentDTO } from './dto/comment.dto'
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger'

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  /**
   * Create a comment
   * @param data Object
   */
  @Post('/create')
  @ApiCreatedResponse({
    status: 201,
    description: 'The comment has been successfully created.',
    type: CommentDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: CommentDTO) {
    try {
      return this.commentService.add(data)
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Edit a comment
   * @param uid String
   * @param data Object
   */
  @Put(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'A comment has been successfully updated.',
    type: CommentDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(@Param('uid') uid: string, @Body() data: Partial<CommentDTO>) {
    try {
      return this.commentService.edit(uid, data)
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Remove a comment
   * @param uid String
   */
  @Delete(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'A comment has been successfully deleted.',
    type: CommentDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('uid') uid: string) {
    try {
      return this.commentService.delete(uid)
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * TODO: get rid of this and pass custom where into regular find
   * Get all comments related to a post
   */
  @Get()
  @ApiCreatedResponse({
    status: 201,
    description: 'All comments have been successfully retreived.',
    type: [CommentDTO],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAllByPost(@Param('uid') post_id: string, @Response() res: any) {
    try {
      return this.commentService.findAllByPostID(post_id)
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Get a specific comment
   * @param uid String
   */
  @Get(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'A comment has been successfully retreived.',
    type: CommentDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findOne(@Param('uid') uid: string) {
    try {
      return this.commentService.findOne(uid)
    } catch (error) {
      throw new Error(error)
    }
  }
}
