import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import * as faker from 'faker';

describe('UserService', () => {
  let userService: UserService;
  let repo: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(UserEntity),
          // as a class value, Repository needs no generics
          useClass: Repository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    // Save the instance of the repository and set the correct generics
    repo = module.get<Repository<UserEntity>>(getRepositoryToken(UserEntity));
  });

  it('should be able to find a user', async () => {
    const newUser: UserEntity = {
      user_id: `${faker.random.uuid()}`,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    };

    jest.spyOn(repo, 'create').mockReturnValueOnce(newUser);
    expect(await userService.add(newUser)).toEqual(newUser);
  });

  it('should be able to find and return all users', async () => {
    const newUser1: UserEntity = {
      user_id: `${faker.random.uuid()}`,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    };

    const newUser2: UserEntity = {
      user_id: `${faker.random.uuid()}`,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    };

    const newUsers = [];
    newUsers.push(newUser1);
    newUsers.push(newUser2);

    jest.spyOn(repo, 'find').mockResolvedValueOnce(newUsers);
    const foundUsers = await userService.findAll();

    expect(foundUsers).toEqual(newUsers);
    expect(foundUsers.length).toEqual(newUsers.length);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
