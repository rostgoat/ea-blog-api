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
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';

/**
 * User Controller
 */
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * Create user
   * @param data Object
   */
  @Post()
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
  @Get()
  async find(@Response() res: any) {
    return this.userService.findAll();
  }

  /**
   * Get a specific user
   * @param user_id String
   */
  @Get(':id')
  async findOne(@Param('id') user_id: string) {
    // return this.userService.getOne(user_id);
  }
}
