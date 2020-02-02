import { Injectable } from '@nestjs/common';
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

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async addPost(data: PostDTO): Promise<PostEntity> {
    const newPost = await this.postService.add(data);
    return newPost;
  }
}
