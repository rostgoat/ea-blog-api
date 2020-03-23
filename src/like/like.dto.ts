import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';

/**
 * Like data transfer object  
 */
export class LikeDTO {
  @ApiProperty({
    description: 'Primary Key',
    type: String,
  })
  like_id: string;

  @ApiProperty({
    description: 'Like UID',
    type: String,
  })
  uid: string;

  @ApiProperty({
    description: 'Like liked at Date',
    type: Date,
  })
  liked_at: Date;

  @ApiProperty({
    description: 'Flag that determines if the post is liked by a user',
    type: Boolean,
  })
  post_liked: Boolean;

  @ApiProperty({
    description: 'Post Foreign Key',
    type: String,
  })
  post_uid: string;

  @ApiProperty({
    description: 'User Foreign Key',
    type: String,
  })
  user_uid: string;

  @ApiProperty({
    description: 'User ',
    type: User,
  })
  user: User;
}
