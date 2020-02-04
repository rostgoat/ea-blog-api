import { ApiProperty } from '@nestjs/swagger';

/**
 * User data transfer object expected from controller
 */
export class UserDTO {
  @ApiProperty({
    description: 'User Primary Key',
    type: String,
  })
  user_id: string;

  @ApiProperty({
    description: 'User Name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Blog Post Foreign Key',
    type: String,
  })
  post_id: string;
}
