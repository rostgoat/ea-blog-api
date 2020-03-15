import { Injectable } from '@nestjs/common';
import { PhotoDTO } from './photo.dto';
import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { toPhotoDto, toDTO } from 'src/shared/mapper';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private photoRepository: Repository<Photo>,
      ) {}
    
      /**
       * Create a new photo and associate user to the photo
       * @param data Object
       */
      async add(data: Partial<PhotoDTO>) {
        const { originalname, buffer } = data;
        const title = originalname;

        // create object with new photo props
        const newPhoto = await this.photoRepository.create({
            title,
            buffer
        });
        // save changes
        await this.photoRepository.save(newPhoto);
        // return new photo
        return toDTO('photo', newPhoto);
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
