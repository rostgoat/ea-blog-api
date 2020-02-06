import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as faker from 'faker';
import { PostService } from '../post/post.service';
import { Post } from '../post/post.entity';

const testUserUID = `${faker.random.uuid()}`;
const testUserName = `${faker.name()}`;

const testUser = new User(testUserUID, testUserName);

class PostServiceMock extends PostService {}
/**
 * User Model Unit Test
 */
describe('UserService', () => {
  let userService: UserService;

  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            save: jest.fn(),
            create: jest.fn().mockReturnValue(testUser),
          },
        },
        {
          provide: PostService,
          useValue: PostServiceMock,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be able to create a user', async () => {
    // const newUser: User = {
    //   user_id: `${faker.random.uuid()}`,
    //   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    //   posts: [],
    //   comments: [],
    // };
    expect(
      userService.add({
        user_id: testUserUID,
        name: testUserName,
      }),
    ).resolves.toEqual(testUser);

    // jest.spyOn(repo, 'create').mockReturnValueOnce(newUser);
    // expect(await userService.add(newUser)).toEqual(newUser);
  });

  // it('should be able to find and return all users', async () => {
  //   const newUser1: User = {
  //     user_id: `${faker.random.uuid()}`,
  //     name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  //     posts: [],
  //     comments: [],
  //   };

  //   const newUser2: User = {
  //     user_id: `${faker.random.uuid()}`,
  //     name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  //     posts: [],
  //     comments: [],
  //   };

  //   const newUsers = [];
  //   newUsers.push(newUser1);
  //   newUsers.push(newUser2);

  //   jest.spyOn(repo, 'find').mockResolvedValueOnce(newUsers);
  //   const foundUsers = await userService.findAll();

  //   expect(foundUsers).toEqual(newUsers);
  //   expect(foundUsers.length).toEqual(newUsers.length);
  // });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
