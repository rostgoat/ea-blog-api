import { ApiProperty } from '@nestjs/swagger';

/**
 * Comment data transfer object expected from controller
 */
export class CommentDTO {
  @ApiProperty({
    description: 'Primary Key',
    type: String,
  })
  comment_id: string;

  @ApiProperty({
    description: 'Comment Title',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'Post Foreign Key',
    type: String,
  })
  post_id: string;

  @ApiProperty({
    description: 'User Foreign Key',
    type: String,
  })
  user_id: string;
}
