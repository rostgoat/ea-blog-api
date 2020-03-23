import {
  Injectable,
  Inject,
  forwardRef,
  HttpException,
  HttpStatus,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Promise } from 'bluebird';
import { Repository, getRepository } from 'typeorm';
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
    const { name, password, username, email } = userDto;
    // check if the user exists in the db
    const userInDb = await this.userRepository.findOne({
      where: { username },
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const user: User = await this.userRepository.create({
      name,
      password,
      username,
      email
    });
    await this.userRepository.save(user);
    return toUserDto(user);
  }

  /**
   * Update an existing user
   * @param data Object
   */
  async edit(uid: string, data: Partial<UserDTO>): Promise<User> {
    await this.userRepository.update({ uid }, data);
    return this.userRepository.findOne({ uid });
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
  async findOne(uid: string): Promise<User> {
    return await this.userRepository.findOne({
      relations: ['posts', 'comments'],
      where: { uid },
    });
  }

  /**
   * Find user by uid
   */
  async findOneByUID(uid: string): Promise<User> {
    return await this.userRepository.findOne({
      relations: ['posts'],
      where: { uid: uid },
    });
  }

  /**
   * Remove a user related to a user
   * @param data Object
   */
  async delete(uid: string) {
    // // get all posts related to user
    // const posts = await this.postService.findAllByPostID(uid);

    // // remove all posts related to user
    // await Promise.each(posts, async post => {
    //   await this.postService.delete(post.post_id);
    // });

    // delete user
    await this.userRepository.delete(uid);
    return { deleted: true };
  }

  /**
   * Find user by login credentials
   * @param username String
   * @param password String
   */
  async findByLogin({ username, password }: UserLoginDTO): Promise<UserDTO> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (typeof user === 'undefined') {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    // compare passwords
    const areEqual = await bcrypt.compare(password, user.password);
    if (!areEqual) {
      throw new UnauthorizedException({message: 'Passwords don\'t match', error: HttpStatus.UNAUTHORIZED});
    }
    return toUserDto(user);
  }

  async findByPayload({ username }: UserLoginDTO): Promise<UserDTO> {
    return await this.userRepository.findOne({ where: { username } });
  }

  async usersPostLikes() {
    return await getRepository(User)
      .createQueryBuilder('u')
      .select('DISTINCT(`user_id`)')
      .innerJoin('u.likes', 'l')
      .where('l.user_id = u.user_id')
      .getCount();
  }
}
