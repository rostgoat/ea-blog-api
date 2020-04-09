import { ApiProperty } from '@nestjs/swagger'

/**
 * User's registration status data transfer object
 */
export class RegistrationStatus {
  @ApiProperty({
    description: 'Registration status',
    type: Boolean,
  })
  success: boolean

  @ApiProperty({
    description: 'Registration success/error message',
    type: String,
  })
  message: string
}
