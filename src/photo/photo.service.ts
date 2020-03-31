import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { PhotoDTO } from './photo.dto';
import * as sharp from 'sharp';
import * as fs from 'fs';
import { resolve } from 'path';
import { createDir } from '../utils/file';
import { UserService } from 'src/user/user.service';
import Storage from '../utils/s3';
import { StorageService } from 'src/storage/storage.service';

@Injectable()
export class PhotoService {
  
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => StorageService))
    private readonly storageService: StorageService
  ) {
  }

  /**
   * Create a new photo and associate user to the photo
   * @param data Object
   */
  async add(data: Partial<PhotoDTO>, user_uid) {
    const { filename, path } = data;

    // resize image and save to new path
    const newImageFilePath = await this.resizeImage(path, filename);

    // grab user by passed uid
    const user = await this.userService.findOneByUID(user_uid);

    // save image to s3 bucket
    const put = await this.storageService.upload
    // const put: any = await this.storage.putFile(
    //   user.bucket,
    //   newImageFilePath,
    //   filename,
    //   {},
    // );
    console.log('put', put)
    return filename;
    
    // if image was succefully saved to bucket, return the filename
    // if (put.Location) {
    //   return filename;
    // } else {
    //   throw new Error('Could not save image to bucket!')
    // }
  }

  /**
   * Modify image before saving in db
   * @param path String
   * @param filename String
   */
  private async resizeImage(path: string, filename: string) {
    const dirName = 'uploads';

    // create uploads directory if one does not exist (locally only)
    const createdDir = await createDir(dirName);
    console.log('createdDir', createdDir)
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
 
    // return new image path
    return resolve(`${createdDir}/${filename}`);
  }
}
