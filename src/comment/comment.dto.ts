import { ApiProperty } from '@nestjs/swagger';

/**
 * Comment data transfer object expected from controller
 */
export class CommentDTO {
  @ApiProperty()
  comment_id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  post_id: string;

  @ApiProperty()
  user_id: string;
}
