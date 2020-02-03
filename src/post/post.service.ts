import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
    // grab related user and assign to user object of post
    newPost.user = await this.userService.findOne(data.user_id);
    // save changes
    await this.postRepository.save(newPost);
    // return new post
    return newPost;
  }

  /**
   * Update a post related to a user
   * @param post_id String
   * @param data Object
   */
  async edit(post_id: string, data: Partial<PostDTO>) {
    await this.postRepository.update({ post_id }, data);
    return await this.postRepository.findOne({ post_id });
  }

  /**
   * Remove a post related to a user
   * @param data Object
   */
  async delete(post_id: string) {
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
