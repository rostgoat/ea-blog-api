/**
 * * Nest Modules
 */
import { Test } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getConnection } from 'typeorm'

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

/**
 * * Dependencies
 */
import * as faker from 'faker'

/**
 * User Integrations tests
 */
describe('User Integration Tests', () => {
  let service: UserService

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [UserModule, DatabaseModule, TypeOrmModule.forFeature([User])],
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
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
