import { ApiProperty } from '@nestjs/swagger';

/**
 * User data transfer object expected from controller
 */
export class UserDTO {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  post_id: string;
}
