import { Injectable } from '@nestjs/common';
import { PhotoDTO } from './photo.dto';
import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { toPhotoDto, toDTO } from '../utils/mapper';
import * as sharp from 'sharp';
import * as fs from 'fs';
import { resolve } from 'path';
import { createDir } from '../utils/file';

@Injectable()
export class PhotoService {

  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {
  }

  /**
   * Create a new photo and associate user to the photo
   * @param data Object
   */
  async add(data: Partial<PhotoDTO>) {
    const { filename, path } = data;
    const title = filename;

    const newImageFilePath = await this.resizeImage(path, filename);
    console.log('newImageFilePath', newImageFilePath)
    // create object with new photo props
    const newPhoto = await this.photoRepository.create({
      title,
      path: newImageFilePath,
    });
    // save changes
    await this.photoRepository.save(newPhoto);
    // return new photo
    return toDTO('photo', newPhoto);
  }

  /**
   * Modify image before saving in db
   * @param path String
   * @param filename String
   */
  private async resizeImage(path: string, filename: string) {
    const dirName = './uploads';

    // create uploads directory if one does not exist (locally only)
    const createdDir = await createDir(dirName);
    console.log('__dirname', resolve(__dirname, '..'))
    // resize image
    await sharp(path)
      .resize(300, 200, {
        fit: 'contain',
        background: 'white',
      })
      .toFile(`${dirName}/${filename}`);
    // delete temp file after sharp resizes the image
    fs.unlink(path, err => {
      if (err) {
        throw new Error('Could not delete image from .tmp directory!');
      }
    });
    console.log('resolve(__dirname, `uploads/${filename}`)', resolve(__dirname, `uploads/${filename}`))
    // return new image path
    return resolve(__dirname, `uploads/${filename}`);
  }

  /**
   * Find user by uid
   */
  async findOneByUID(uid: string): Promise<Photo> {
    return await this.photoRepository.findOne({
      where: { uid: uid },
    });
  }
}
