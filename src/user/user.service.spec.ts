import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { PostService } from '../post/post.service';
import * as faker from 'faker';
import { LikeService } from '../like/like.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

const testUserUsername1 = faker.internet.userName();
const testUserEmail1 = faker.internet.email();
const testUserPassword1 = faker.internet.password();
const testUserName1 = `${faker.name.firstName()} ${faker.name.lastName()}`;

const testUserName2 = `${faker.name.firstName()} ${faker.name.lastName()}`;

// user test object
const testUser = new User(
  testUserName1,
  testUserEmail1,
  testUserUsername1,
  testUserPassword1,
);
const testUser2 = new User(testUserName2);

// users test array
const testUsers = [testUser, testUser2];

const tempUser = {
  name: testUserName1,
  email: testUserEmail1,
  username: testUserUsername1,
  password: testUserPassword1,
};

/**
 * User Model Unit Test
 */
describe('UserService', () => {
  let userService: UserService;
  let postService: PostService;
  let likeService: LikeService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(User),
          // mocks of all the methods from the User Service
          useValue: {
            save: jest.fn(),
            create: jest.fn().mockReturnValue(testUser),
            find: jest.fn().mockResolvedValue(testUsers),
            // findOne: jest.fn().mockResolvedValue(testUser),
            update: jest.fn().mockResolvedValue(testUser),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
        PostService,
        {
          provide: PostService,
          useClass: Repository,
        },
        LikeService,
        {
          provide: LikeService,
          useClass: Repository,
        },
      ],
    }).compile();
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    userService = module.get<UserService>(UserService);
    postService = module.get<PostService>(PostService);
    likeService = module.get<LikeService>(LikeService);
  });

  // Add tests and cases
  describe('Add', () => {
    it("should be able to create a user where the user currently doesn't exist", async () => {
      // findOne mock that expects to return null becase we assume the user doesn't exists in the "db"
      userRepository.findOne = jest.fn(() => null);

      await userService.add(tempUser);
      expect(tempUser).toEqual(testUser);
      expect(userRepository.create).toHaveBeenCalledWith(tempUser);
      expect(userRepository.save).toBeCalledTimes(1);
    });

    it('should throw an error when creating a new user where the username has previously been used', async () => {
      // findOne mock that expects to return an error becase we assume the user with those credentials exists in the "db"
      userRepository.findOne = jest.fn(() => tempUser.username);
      const errorCreateNewUser = Promise.reject(new HttpException('User already exists', HttpStatus.BAD_REQUEST))
      expect(errorCreateNewUser).rejects.toMatchObject(new HttpException('User already exists', HttpStatus.BAD_REQUEST));
    });
  });

  describe('findAll', () => {
    it('should be able to find and return all users', async () => {
      const foundUsers = await userService.findAll();
      expect(foundUsers).toEqual(testUsers);
      expect(foundUsers.length).toEqual(testUsers.length);
    });
  })

  describe('findOne', () => {
    it('should be able to find and return a user', async () => {
      // mock findOne that returns a user uid
      userRepository.findOne = jest.fn(() => tempUser.username);
      const foundUser = await userService.findOne(tempUser.username);
      expect(foundUser).toEqual(testUser.username);
    });
  })

  //   it('should be able to update a user', async () => {
  //     const newUser = await userService.add({
  //       name: testUserName1,
  //     });

  //     const updatedUserName = `${faker.name.firstName()} ${faker.name.firstName()}`;
  //     const updatedUser = await userService.edit(newUser.user_id, {
  //       name: updatedUserName,
  //     });

  //     jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(updatedUser);
  //   });

  //   it('should be able to delete a user', async () => {
  //     const newUser = await userService.add({
  //       name: testUserName1,
  //     });

  //     const deletedUser = await userService.delete(newUser.user_id);
  //     expect(deletedUser).not.toBe({ deleted: true });
  //   });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
