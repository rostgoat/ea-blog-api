/**
 * * Swagger
 */
import { ApiProperty } from '@nestjs/swagger'

/**
 * JSON Web Token Payload data transfer object
 */
export class JwtPayload {
  @ApiProperty({
    description: "User's username",
    type: String,
  })
  username: string

  @ApiProperty({
    description: "User's password",
    type: String,
  })
  password: string

  @ApiProperty({
    description: "User's uid",
    type: String,
  })
  uid: string
}
