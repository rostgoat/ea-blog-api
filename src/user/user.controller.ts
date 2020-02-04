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
import { ApiTags, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';

/**
 * User Controller
 */
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * Create user
   * @param data Object
   */
  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: UserDTO) {
    try {
      return this.userService.add(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get all users
   */
  @ApiCreatedResponse({
    status: 201,
    description: 'All users have been successfully retreived.',
    type: [UserDTO],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async find(@Response() res: any) {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get a specific user
   * @param user_id String
   */
  @ApiCreatedResponse({
    status: 201,
    description: 'A user has been successfully retreived.',
    type: UserDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get(':id')
  async findOne(@Param('id') user_id: string) {
    return this.userService.findOne(user_id);
  }

  /**
   * Remove a user
   * @param data Object
   */
  @ApiCreatedResponse({
    status: 201,
    description: 'A user has been successfully deleted.',
    type: UserDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':id')
  async delete(@Param('id') user_id: string) {
    try {
      return this.userService.delete(user_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
