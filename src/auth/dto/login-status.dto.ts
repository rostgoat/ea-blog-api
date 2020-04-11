/**
 * * Swagger
 */
import { ApiProperty } from '@nestjs/swagger'

/**
 * User's login status data transfer object
 */
export class LoginStatus {
  @ApiProperty({
    description: "User's username",
    type: String,
  })
  username: string

  @ApiProperty({
    description: 'JSON Web Token',
    type: String,
  })
  accessToken: any

  @ApiProperty({
    description: 'Token expiry date',
    type: String,
  })
  expiresIn: any

  @ApiProperty({
    description: "User's name",
    type: String,
  })
  name: string

  @ApiProperty({
    description: "User's uid",
    type: String,
  })
  uid: string
}
