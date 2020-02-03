import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Promise } from 'bluebird';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';
import { PostService } from '../post/post.service';

/**
 * User Model Class
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @Inject(forwardRef(() => PostService))
    private postService: PostService,
  ) {}

  /**
   * Create a new user
   * @param data Object
   */
  async add(data: Partial<UserDTO>): Promise<UserEntity> {
    // create object with new user props
    const newUser = await this.userRepository.create(data);
    await this.userRepository.save(newUser);
    return newUser;
  }

  /**
   * Update an existing user
   * @param data Object
   */
  async edit(user_id: string, data: Partial<UserDTO>): Promise<UserEntity> {
    await this.userRepository.update({ user_id }, data);
    return await this.userRepository.findOne({ user_id });
  }

  /**
   * Return all users
   */
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  /**
   * Return one user
   */
  async findOne(user_id: string): Promise<UserEntity> {
    return await this.userRepository.findOne({
      relations: ['posts', 'comments'],
      where: { user_id },
    });
  }

  /**
   * Remove a user related to a user
   * @param data Object
   */
  async delete(user_id: string) {
    // get all posts related to user
    const posts = await this.postService.findAllByPostID(user_id);

    // remove all posts related to user
    await Promise.each(posts, async post => {
      await this.postService.delete(post.post_id);
    });

    // delete user
    await this.userRepository.delete(user_id);
    return { deleted: true };
  }
}
