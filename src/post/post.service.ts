import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PostEntity } from './post.entity';
import { PostDTO } from './post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  /**
   * Create a new post
   * @param data Object
   */
  async add(data: PostDTO): Promise<PostEntity> {
    // create object with new post props
    const newPost = await this.postRepository.create(data);
    await this.postRepository.save(newPost);
    return newPost;
  }

  async findAll(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }
}
