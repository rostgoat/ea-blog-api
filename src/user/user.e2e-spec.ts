/**
 * * Nest Modules
 */
import { Test } from '@nestjs/testing'
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'

/**
 * * Modules
 */
import { UserModule } from './user.module'
import { DatabaseModule } from '../database/database.module'

/**
 * * Entities
 */
import { User } from './user.entity'

/**
 * * Services
 */
import { UserService } from './user.service'

/**
 * * DTOs
 */
import { UserCreateDTO } from './user.create.dto'
import { UserLoginDTO } from './user.login.dto'

/**
 * * Dependencies
 */
import * as faker from 'faker'

/**
 * User Integrations tests
 */
describe('User Integration Tests', () => {
  let service: UserService
  let repo: Repository<User>

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [UserModule, DatabaseModule, TypeOrmModule.forFeature([User])],
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
    repo = module.get<Repository<User>>(getRepositoryToken(User))
  })

  describe('Add', () => {
    const testUsername = faker.internet.userName()
    const testEmail = faker.internet.email()
    const testUserPassword = faker.internet.password()
    const testName = `${faker.name.firstName()} ${faker.name.lastName()}`

    const user: Partial<UserCreateDTO> = {
      name: testName,
      email: testEmail,
      username: testUsername,
      password: testUserPassword,
    }

    it('should create a user is the DB', async () => {
      const res = await service.add(user)

      expect(res).toHaveProperty('user_id')
      expect(res).toMatchObject({ name: testName })
      expect(res).toMatchObject({ email: testEmail })
      expect(res).toMatchObject({ username: testUsername })
      expect(res).toBeTruthy()
    })
  })

  describe('Edit', () => {
    const testUsername = faker.internet.userName()
    const testEmail = faker.internet.email()
    const testUserPassword = faker.internet.password()
    const testName = `${faker.name.firstName()} ${faker.name.lastName()}`

    const user: Partial<UserCreateDTO> = {
      name: testName,
      email: testEmail,
      username: testUsername,
      password: testUserPassword,
    }

    it('should update a user in the DB', async () => {
      const createdUser = await service.add(user)

      const testNewUsername = faker.internet.userName()
      const testNewEmail = faker.internet.email()
      const testNewName = `${faker.name.firstName()} ${faker.name.lastName()}`

      const userDataToUpdate = {
        username: testNewUsername,
        name: testNewName,
        email: testNewEmail,
      }

      const updatedUser = await service.edit(createdUser.uid, userDataToUpdate)

      expect(updatedUser).not.toMatchObject({ name: testName })
      expect(updatedUser).not.toMatchObject({ email: testEmail })
      expect(updatedUser).not.toMatchObject({ username: testUsername })
      expect(updatedUser).toBeTruthy()
    })
  })

  describe('Delete', () => {
    const testUsername = faker.internet.userName()
    const testEmail = faker.internet.email()
    const testUserPassword = faker.internet.password()
    const testName = `${faker.name.firstName()} ${faker.name.lastName()}`

    const user: Partial<UserCreateDTO> = {
      name: testName,
      email: testEmail,
      username: testUsername,
      password: testUserPassword,
    }

    it('should delete a user in the DB', async () => {
      const createdUser = await service.add(user)
      const deletedUser = await service.delete(createdUser.uid)

      expect(deletedUser).toMatchObject({ deleted: true })
    })
  })

  describe('Find', () => {
    const testUsername = faker.internet.userName()
    const testEmail = faker.internet.email()
    const testUserPassword = faker.internet.password()
    const testName = `${faker.name.firstName()} ${faker.name.lastName()}`

    const user: Partial<UserCreateDTO> = {
      name: testName,
      email: testEmail,
      username: testUsername,
      password: testUserPassword,
    }

    const user2: Partial<UserCreateDTO> = {
      name: testName,
      email: `user2_${testEmail}`,
      username: `user2_${testUsername}`,
      password: testUserPassword,
    }

    it('should be able to get all users in the DB', async () => {
      await service.add(user)
      await service.add(user2)

      const users = await service.findAll()

      expect(users.length).toEqual(2)
      expect(users[0].username).not.toEqual(users[1].username)
    })
  })

  describe('Find One', () => {
    const testUsername = faker.internet.userName()
    const testEmail = faker.internet.email()
    const testUserPassword = faker.internet.password()
    const testName = `${faker.name.firstName()} ${faker.name.lastName()}`

    const user: Partial<UserCreateDTO> = {
      name: testName,
      email: testEmail,
      username: testUsername,
      password: testUserPassword,
    }

    it('should be able to get a user by UID', async () => {
      const newUser = await service.add(user)
      const foundUser = await service.findOne(newUser.uid)

      expect(foundUser.uid).toEqual(newUser.uid)
    })

    it('should be able to get a user by username and password', async () => {
      const newUser = await service.add(user)

      const loginUserDto: UserLoginDTO = {
        uid: newUser.uid,
        username: newUser.username,
        password: testUserPassword,
      }

      const foundUser = await service.findByLogin(loginUserDto)

      expect(foundUser.uid).toEqual(newUser.uid)
    })
  })

  /**
   * after each test, delete everything from users table
   */
  afterEach(async () => {
    await repo.query(`DELETE FROM users`)
  })

  /**
   * after all tests are done, delete everything from users table
   */
  afterAll(async () => {
    const connection = getConnection()

    await connection
      .createQueryBuilder()
      .delete()
      .from(User)
      .execute()

    await connection.close()
  })
})
