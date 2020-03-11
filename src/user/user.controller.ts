import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Response } from 'express';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { UserCreateDTO } from './user.create.dto';

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
  @Post('create')
  @ApiCreatedResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserCreateDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: UserCreateDTO) {
    try {
      return this.userService.add(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Update user
   * @param uid String
   * @param data Object
   */
  @Put(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'The user has been successfully updated.',
    type: UserDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(@Param('uid') uid: string, @Body() data: Partial<UserDTO>) {
    try {
      return this.userService.edit(uid, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get all users
   */
  @Get('find')
  @ApiCreatedResponse({
    status: 200,
    description: 'All users have been successfully retreived.',
    type: [UserDTO],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async find() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get a specific user
   * @param uid String
   */
  @Get(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'A user has been successfully retreived.',
    type: UserDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findOne(@Param('uid') uid: string) {
    return this.userService.findOne(uid);
  }

  /**
   * Remove a user
   * @param uid String
   */
  @Delete(':uid')
  @ApiCreatedResponse({
    status: 201,
    description: 'A user has been successfully deleted.',
    type: UserDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('uid') uid: string) {
    try {
      return this.userService.delete(uid);
    } catch (error) {
      throw new Error(error);
    }
  }
}
