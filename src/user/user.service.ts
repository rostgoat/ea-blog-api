import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';
import { PostService } from 'src/post/post.service';
import { PostDTO } from 'src/post/post.dto';
import { PostEntity } from 'src/post/post.entity';

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
  async add(data: UserDTO): Promise<UserEntity> {
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
      relations: ['posts'],
      where: { user_id },
    });
  }

  /**
   * Get a post by user_id
   * @param data Object
   */
  async getPostByUserId(data: PostDTO): Promise<PostEntity> {
    const foundPost = await this.postService.findOne(data);
    return foundPost;
  }
}
