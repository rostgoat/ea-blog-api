import { ApiProperty } from '@nestjs/swagger';

/**
 * Post data transfer object expected from controller
 */
export class PostDTO {
  @ApiProperty({
    description: 'Primary Key',
    type: String,
  })
  post_id: string;

  @ApiProperty({
    description: 'Title of Post',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'Content of Post',
    type: String,
  })
  content: string;

  @ApiProperty({
    description: 'User Foreign Key',
    type: String,
  })
  user_id: string;
}
