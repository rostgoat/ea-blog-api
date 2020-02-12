import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as faker from 'faker';
import { UserService } from './user.service';
import { HttpStatus } from '@nestjs/common';

// test data for user
const testUserName1 = `${faker.name.firstName()} ${faker.name.lastName()}`;

// user test object
const testUser = new User(testUserName1);

/**
 * User Controller Unit Test
 */
describe('User Controller', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: UserService,
          useValue: {
            findOne: jest.fn(() => true),
            findAll: jest.fn(() => true),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
  });

  it('should be able to return a user', async () => {
    const newUser: User = {
      user_id: `${faker.random.uuid()}`,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      posts: [],
      comments: [],
    };

    userController.findOne(newUser.user_id);
    expect(userService.findOne).toHaveBeenCalledWith(newUser.user_id);
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

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
});
