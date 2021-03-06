import { ApiProperty } from '@nestjs/swagger'

/**
 * Comment data transfer object
 */
export class CommentDTO {
  @ApiProperty({
    description: 'Primary Key',
    type: String,
  })
  comment_id: string

  @ApiProperty({
    description: 'Comment UID',
    type: String,
  })
  uid: string

  @ApiProperty({
    description: 'Comment Content',
    type: String,
  })
  content: string

  @ApiProperty({
    description: 'Post UID',
    type: String,
  })
  post_uid: string

  @ApiProperty({
    description: 'Post Foreign Key',
    type: String,
  })
  post_id: string

  @ApiProperty({
    description: 'User Foreign Key',
    type: String,
  })
  user_id: string
}
