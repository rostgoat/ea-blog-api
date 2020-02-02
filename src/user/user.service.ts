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
  async add(data: UserDTO) {
    // extract args
    const { user_id, name } = data;

    // create object with new user props
    const newUser = await this.userRepository.create({
      user_id,
      name,
    });

    // save db changes
    await this.userRepository.save(newUser);

    // return new user
    return newUser;
  }
}
