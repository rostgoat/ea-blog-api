import { ApiProperty } from '@nestjs/swagger';

/**
 * Photo data transfer object  
 */
export class PhotoDTO {
  @ApiProperty({
    description: 'Photo UID',
    type: String,
  })
  uid: string;

  @ApiProperty({
    description: 'Generated filename of uploaded photo',
    type: String,
  })
  filename: string;

  @ApiProperty({
    description: 'Title of Photo',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'File System Path of Photo',
    type: String,
  })
  path: string;
}
