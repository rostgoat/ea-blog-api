import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
/**
 * Login User data transfer object expected from controller
 */
export class UserCreateDTO {
  @ApiProperty({
    description: 'User Email',
    type: String,
  })
  @IsEmail() 
  @IsNotEmpty() 
  email: string;

  @ApiProperty({
    description: 'User Password',
    type: String,
  })
  @IsNotEmpty() 
  readonly password: string;
}
