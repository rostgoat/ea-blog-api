import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import * as faker from 'faker'
import { UserService } from './user.service'

const testUserUid = faker.random.uuid()
const testUserUsername1 = faker.internet.userName()
const testUserEmail1 = faker.internet.email()
const testUserPassword1 = faker.internet.password()
const testUserName1 = `${faker.name.firstName()} ${faker.name.lastName()}`

// user test object
const testUser = new User(
  testUserUid,
  testUserName1,
  testUserEmail1,
  testUserUsername1,
  testUserPassword1,
)
/**
 * User Controller Unit Test
 */
describe('User Controller', () => {
  let userController: UserController
  let userService: UserService

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
    }).compile()

    userService = module.get<UserService>(UserService)
    userController = module.get<UserController>(UserController)
  })

  it('should be able to create a user', async () => {
    userController.create(testUser)
    expect(userService.add).toHaveBeenCalledWith(testUser)
  })

  it('should be able to update a user', async () => {
    userController.update(testUser.user_id, testUser)
    expect(userService.edit).toHaveBeenCalledWith(testUser.user_id, testUser)
  })

  it('should be able to delete a user', async () => {
    userController.delete(testUser.user_id)
    expect(userService.delete).toHaveBeenCalledWith(testUser.user_id)
    expect(await userController.delete(testUser.user_id)).toBe(true)
  })

  it('should be able to return a user', async () => {
    userController.findOne(testUser.user_id)
    expect(userService.findOne).toHaveBeenCalledWith(testUser.user_id)
  })

  it('should be able to return an array of users', async () => {
    const result: User[] = [testUser]

    jest
      .spyOn(userService, 'findAll')
      .mockImplementation(async (): Promise<User[]> => Promise.resolve(result))

    expect(await userController.find()).toBe(result)
  })

  afterEach(() => {
    jest.restoreAllMocks()
    jest.resetAllMocks()
  })
})
