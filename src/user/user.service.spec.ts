import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as faker from 'faker';
import { PostService } from '../post/post.service';

// test data for user
const testUserName1 = `${faker.name.firstName()} ${faker.name.lastName()}`;

const testUserName2 = `${faker.name.firstName()} ${faker.name.lastName()}`;

// user test object
const testUser = new User(testUserName1);
const testUser2 = new User(testUserName2);

// users test array
const testUsers = [testUser, testUser2];

// mock of Post Service class
// required as these two models are related
class PostServiceMock extends PostService {}
/**
 * User Model Unit Test
 */
describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          // mocks of all the methods from the User Service
          useValue: {
            save: jest.fn(),
            create: jest.fn().mockReturnValue(testUser),
            find: jest.fn().mockResolvedValue(testUsers),
            findOne: jest.fn().mockResolvedValue(testUser),
            update: jest.fn().mockResolvedValue(testUser),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
        {
          provide: PostService,
          useValue: PostServiceMock,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be able to create a user', async () => {
    const newUser = await userService.add({
      name: testUserName1,
    });
    expect(newUser).toEqual(testUser);
  });

  it('should be able to find and return all users', async () => {
    const foundUsers = await userService.findAll();
    expect(foundUsers).toEqual(testUsers);
    expect(foundUsers.length).toEqual(testUsers.length);
  });

  it('should be able to find and return a user', async () => {
    const newUser = await userService.add({
      name: testUserName1,
    });

    const foundUser = await userService.findOne(newUser.user_id);
    expect(foundUser).toEqual(testUser);
  });

  it('should be able to update a user', async () => {
    const newUser = await userService.add({
      name: testUserName1,
    });

    const updatedUserName = `${faker.name.firstName()} ${faker.name.firstName()}`;
    const updatedUser = await userService.edit(newUser.user_id, {
      name: updatedUserName,
    });
    console.log('updatedUser', updatedUser);
    console.log('newUser', newUser);
    expect(updatedUser).not.toBe(testUser);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
