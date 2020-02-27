import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

/**
 * General User data transfer object expected from controller
 * This DTO omits the password field
 */
export class UserDTO {
  @ApiProperty({
    description: 'User Primary Key',
    type: String,
  })
  user_id: string;

  @ApiProperty({
    description: 'User UID',
    type: String,
  })
  @IsNotEmpty()
  uid: string;

  @ApiProperty({
    description: 'User Name',
    type: String,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User Email',
    type: String,
  })
  @IsEmail() 
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Blog Post Foreign Key',
    type: String,
  })
  post_id: string;
}
