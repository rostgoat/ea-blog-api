import {
  Injectable,
  Inject,
  forwardRef,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Promise } from 'bluebird';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';
import { PostService } from '../post/post.service';
import { toUserDto } from 'src/shared/mapper';
import { UserLoginDTO } from './user.login.dto';
import { UserCreateDTO } from './user.create.dto';
const bcrypt = require('bcrypt');

/**
 * User Model Class
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject(forwardRef(() => PostService))
    private postService: PostService,
  ) {}

  /**
   * Create a new user
   * @param data Object
   */
  async add(userDto: UserCreateDTO): Promise<UserDTO> {
    const { name, password, email } = userDto;
    // check if the user exists in the db
    const userInDb = await this.userRepository.findOne({
      where: { email },
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const user: User = await this.userRepository.create({
      name,
      password,
      email,
    });
    await this.userRepository.save(user);
    return toUserDto(user);
  }

  /**
   * Update an existing user
   * @param data Object
   */
  async edit(user_id: string, data: Partial<UserDTO>): Promise<User> {
    await this.userRepository.update({ user_id }, data);
    return this.userRepository.findOne({ user_id });
  }

  /**
   * Return all users
   */
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /**
   * Return one user
   */
  async findOne(user_id: string): Promise<User> {
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
    // // get all posts related to user
    // const posts = await this.postService.findAllByPostID(user_id);

    // // remove all posts related to user
    // await Promise.each(posts, async post => {
    //   await this.postService.delete(post.post_id);
    // });

    // delete user
    await this.userRepository.delete(user_id);
    return { deleted: true };
  }

  /**
   * Find user by login credentials
   * @param email String
   * @param password String
   */
  async findByLogin({ email, password }: UserLoginDTO): Promise<UserDTO> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    // compare passwords
    const areEqual = await bcrypt.comparePasswords(user.password, password);
    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return toUserDto(user);
  }

  async findByPayload({ email }: UserLoginDTO): Promise<UserDTO> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
