/**
 * * Nest Modules
 */
import { Test } from '@nestjs/testing'
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'

/**
 * * Modules
 */
import { UserModule } from '../../user.module'
import { DatabaseModule } from '../../../database/database.module'

/**
 * * Entities
 */
import { User } from '../../user.entity'

/**
 * * Services
 */
import { UserService } from '../../user.service'

/**
 * * DTOs
 */
import { UserCreateDTO } from '../../dto/user.create.dto'
import { UserLoginDTO } from '../../dto/user.login.dto'

/**
 * * Dependencies
 */
import * as faker from 'faker'

/**
 * Test User Data
 */
const testUsername = faker.internet.userName()
const testEmail = faker.internet.email()
const testUserPassword = faker.internet.password()
const testName = `${faker.name.firstName()} ${faker.name.lastName()}`

/**
 * Test user object
 */
const user: Partial<UserCreateDTO> = {
  name: testName,
  email: testEmail,
  username: testUsername,
  password: testUserPassword,
}

/**
 * Second test user object
 */
const user2: Partial<UserCreateDTO> = {
  name: testName,
  email: `user2_${testEmail}`,
  username: `user2_${testUsername}`,
  password: testUserPassword,
}
console.log('process.env', process.env)
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
    it('should create a user in the DB', async () => {
      // create new user
      const res = await service.add(user)

      expect(res).toHaveProperty('user_id')
      expect(res).toMatchObject({ name: testName })
      expect(res).toMatchObject({ email: testEmail })
      expect(res).toMatchObject({ username: testUsername })
      expect(res).toBeTruthy()
    })
  })

  describe('Edit', () => {
    const testNewUsername = faker.internet.userName()
    const testNewEmail = faker.internet.email()
    const testNewName = `${faker.name.firstName()} ${faker.name.lastName()}`

    const userDataToUpdate = {
      username: testNewUsername,
      name: testNewName,
      email: testNewEmail,
    }

    it('should update a user in the DB', async () => {
      // create new user
      const createdUser = await service.add(user)

      // update user
      const updatedUser = await service.edit(createdUser.uid, userDataToUpdate)

      expect(updatedUser).not.toMatchObject({ name: testName })
      expect(updatedUser).not.toMatchObject({ email: testEmail })
      expect(updatedUser).not.toMatchObject({ username: testUsername })
      expect(updatedUser).toBeTruthy()
    })
  })

  describe('Delete', () => {
    it('should delete a user in the DB', async () => {
      // add new user
      const createdUser = await service.add(user)

      // delete user
      const deletedUser = await service.delete(createdUser.uid)

      expect(deletedUser).toMatchObject({ deleted: true })
    })
  })

  describe('Find', () => {
    it('should be able to get all users in the DB', async () => {
      // add first user
      await service.add(user)

      // add second user
      await service.add(user2)

      const users = await service.findAll()

      expect(users.length).toEqual(2)
      expect(users[0].username).not.toEqual(users[1].username)
    })
  })

  describe('Find One', () => {
    it('should be able to get a user by UID', async () => {
      // add new user
      const newUser = await service.add(user)

      // return found user
      const foundUser = await service.findOne(newUser.uid)

      expect(foundUser.uid).toEqual(newUser.uid)
    })

    it('should be able to get a user by username and password', async () => {
      // add new user
      const newUser = await service.add(user)

      const loginUserDto: UserLoginDTO = {
        uid: newUser.uid,
        username: newUser.username,
        password: testUserPassword,
      }

      // return found user
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
