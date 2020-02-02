import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';

/**
 * User Model Class
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  /**
   * Create a new user
   * @param data Object
   */
  async add(data: UserDTO): Promise<UserEntity> {
    // create object with new user props
    return await this.userRepository.create(data);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
}
