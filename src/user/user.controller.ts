import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./user.dto";

/**
 * User Controller
 */
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * Create user
   * @param data Object
   */
  @Post()
  create(@Body() data: UserDTO) {
    // return this.userService.add(data);
  }

  /**
   * Update user
   * @param user_id String
   * @param data Object
   */
  @Put(":id")
  update(@Param("id") user_id: string, @Body() body: Partial<UserDTO>) {
    // return this.userService.edit(user_id, body);
  }

  /**
   * Delete user
   * @param user_id String
   */
  @Delete(":id")
  delete(@Param("id") user_id: string) {
    // return this.userService.delete(user_id);
  }

  /**
   * Get all users
   */
  @Get()
  find() {
    // return this.userService.getAll();
  }

  /**
   * Get a specific user
   * @param user_id String
   */
  @Get(":id")
  findOne(@Param("id") user_id: string) {
    // return this.userService.getOne(user_id);
  }
}
