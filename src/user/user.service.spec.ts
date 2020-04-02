import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { PostService } from '../post/post.service';
import * as faker from 'faker';
import { LikeService } from '../like/like.service';

const testUserUsername1 = faker.internet.userName();
const testUserEmail1 = faker.internet.email();
const testUserPassword1 = faker.internet.password();
const testUserName1 = `${faker.name.firstName()} ${faker.name.lastName()}`;

const testUserName2 = `${faker.name.firstName()} ${faker.name.lastName()}`;

// user test object
const testUser = new User(
  testUserName1,
  testUserEmail1,
  testUserPassword1,
  testUserUsername1,
);
const testUser2 = new User(testUserName2);

// users test array
const testUsers = [testUser, testUser2];

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
            findOne: jest.fn().mockResolvedValue(testUser),
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

  it('should be able to create a user', async () => {
    expect(
      userService.add({
        name: testUserName1,
        email: testUserEmail1,
        username: testUserUsername1,
        password: testUserPassword1,
      }),
    ).resolves.toEqual(testUser);

    expect(userRepository.create).toBeCalledTimes(1);
    expect(userRepository.create).toBeCalledWith({
        name: testUserName1,
        email: testUserEmail1,
        username: testUserUsername1,
        password: testUserPassword1,
    });
    expect(userRepository.save).toBeCalledTimes(1);
    // const newUser = await userService.add(testUser1);
    // expect(newUser).toEqual(testUser);
  });

//   it('should be able to find and return all users', async () => {
//     const foundUsers = await userService.findAll();
//     expect(foundUsers).toEqual(testUsers);
//     expect(foundUsers.length).toEqual(testUsers.length);
//   });

//   it('should be able to find and return a user', async () => {
//     const newUser = await userService.add({
//       user_id: 'uid',
//       name: testUserName1,
//     });

//     const foundUser = await userService.findOne(newUser.user_id);
//     expect(foundUser).toEqual(testUser);
//   });

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
