import { ApiProperty } from '@nestjs/swagger';

/**
 * Photo data transfer object expected from controller
 */
export class PhotoDTO {
  @ApiProperty({
    description: 'Primary Key',
    type: String,
  })
  photo_id: string;

  @ApiProperty({
    description: 'Photo UID',
    type: String,
  })
  uid: string;

  @ApiProperty({
    description: 'Original title of uploaded photo',
    type: String,
  })
  originalname: string;

  @ApiProperty({
    description: 'Title of Photo',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'Byte Array Photo',
    type: Buffer,
  })
  buffer: Buffer;
}
