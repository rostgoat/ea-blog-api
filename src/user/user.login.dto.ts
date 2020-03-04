import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
/**
 * Login User data transfer object expected from controller
 */
export class UserLoginDTO {
  @ApiProperty({
    description: 'User UID',
    type: String,
  })
  @IsNotEmpty()
  uid: string;

  @ApiProperty({
    description: 'Username',
    type: String,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'User Password',
    type: String,
  })
  @IsNotEmpty()
  readonly password: string;
}
