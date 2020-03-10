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
    description: 'Post UID',
    type: String,
  })
  uid: string;

  @ApiProperty({
    description: 'Title of Post',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'Sub Title of Post',
    type: String,
  })
  sub_title: string;

  @ApiProperty({
    description: 'Content of Post',
    type: String,
  })
  content: string;

  @ApiProperty({
    description: 'User UID',
    type: String,
  })
  user_uid: string;

  @ApiProperty({
    description: 'User Foreign Key',
    type: String,
  })
  user_id: string;
}
