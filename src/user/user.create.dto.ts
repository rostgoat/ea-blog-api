import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

/**
 * Registration User data transfer object expected from controller
 * This DTO includes the password field
 */
export class UserCreateDTO {
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
    description: 'Username',
    type: String,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'User Email',
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User Password',
    type: String,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Blog Post Foreign Key',
    type: String,
  })
  post_id: string;
}
