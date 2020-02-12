import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as faker from 'faker';
import { UserService } from './user.service';

// User test object
const newUser: User = {
  user_id: `${faker.random.uuid()}`,
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  posts: [],
  comments: [],
};

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
            add: jest.fn(() => true),
            edit: jest.fn(() => true),
            delete: jest.fn(() => true),
            findOne: jest.fn(() => true),
            findAll: jest.fn(() => true),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
  });

  it('should be able to create a user', async () => {
    userController.create(newUser);
    expect(userService.add).toHaveBeenCalledWith(newUser);
  });

  it('should be able to update a user', async () => {
    userController.update(newUser.user_id, newUser);
    expect(userService.edit).toHaveBeenCalledWith(newUser.user_id, newUser);
  });

  it('should be able to delete a user', async () => {
    userController.delete(newUser.user_id);
    expect(userService.delete).toHaveBeenCalledWith(newUser.user_id);
    expect(await userController.delete(newUser.user_id)).toBe(true);
  });

  it('should be able to return a user', async () => {
    userController.findOne(newUser.user_id);
    expect(userService.findOne).toHaveBeenCalledWith(newUser.user_id);
  });

  it('should be able to return an array of users', async () => {
    const result: User[] = [newUser];

    jest
      .spyOn(userService, 'findAll')
      .mockImplementation(async (): Promise<User[]> => Promise.resolve(result));

    expect(await userController.find()).toBe(result);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
});
