import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as faker from 'faker';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { HttpStatus } from '@nestjs/common';
import { PostService } from '../post/post.service';

// Class that mocks the behavior of UserService
class UserServiceMock extends UserService {
  async add(data): Promise<User> {
    return data;
  }

  async findAll(): Promise<User[]> {
    return [];
  }
}
class PostServiceMock extends PostService {}

/**
 * User Controller Unit Test
 */
describe('User Controller', () => {
  let userController: UserController;
  let userService: UserService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock,
        },
        {
          provide: PostService,
          useValue: PostServiceMock,
        },
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be able to return an array of users', async () => {
    const newUser: User = {
      user_id: `${faker.random.uuid()}`,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      posts: [],
      comments: [],
    };

    const result: User[] = [newUser];

    jest
      .spyOn(userService, 'findAll')
      .mockImplementation(async (): Promise<User[]> => Promise.resolve(result));

    const response = {
      json: (body?: any) => {},
      status: (code: number) => HttpStatus.OK,
    };

    expect(await userController.find(response)).toBe(result);
  });
});
