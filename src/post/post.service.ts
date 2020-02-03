import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promise } from 'bluebird';

import { PostEntity } from './post.entity';
import { PostDTO } from './post.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  /**
   * Create a new post
   * @param data Object
   */
  async add(data: PostDTO): Promise<PostEntity> {
    // create object with new post props
    const newPost = await this.postRepository.create(data);
    await this.postRepository.save(newPost);
    // return new post
    return newPost;
  }

  /**
   * Remove a post related to a user
   * @param data Object
   */
  async removePost(post_id: string) {
    await this.postRepository.delete(post_id);
    return { deleted: true };
  }

  /**
   * Find all posts
   */
  async findAll(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }

  /**
   * Find post
   * @param data Object
   */
  async findOne(data: PostDTO): Promise<PostEntity> {
    let query;

    if (data.user_id) {
      query = {
        where: {
          user_id: data.user_id,
          post_id: data.post_id,
        },
      };
    }
    query = {
      where: {
        post_id: data.post_id,
      },
    };

    const foundPost = await this.postRepository.findOne(query);
    return foundPost;
  }
}
