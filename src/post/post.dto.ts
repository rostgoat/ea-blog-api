import { ApiProperty } from '@nestjs/swagger';

/**
 * Post data transfer object expected from controller
 */
export class PostDTO {
  @ApiProperty()
  post_id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  user_id: string;
}
