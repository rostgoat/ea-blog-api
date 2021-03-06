/**
 * * Nest Modules
 */
import { Test } from '@nestjs/testing'
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'

/**
 * * Modules
 */
import { UserModule } from './../../../user/user.module'
import { AuthModule } from '../../../auth/auth.module'
import { DatabaseModule } from '../../../database/database.module'

/**
 * * Entities
 */
import { User } from '../../../user/user.entity'

/**
 * * Services
 */
import { UserService } from '../../../user/user.service'
import { AuthService } from '../../../auth/auth.service'

/**
 * * DTOs
 */
import { UserCreateDTO } from '../../../user/dto/user.create.dto'

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
 * Auth Integrations tests
 */
describe('Auth Integration Tests', () => {
  let userService: UserService
  let authService: AuthService
  let repo: Repository<User>

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        UserModule,
        AuthModule,
        DatabaseModule,
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UserService, AuthService],
    }).compile()

    userService = module.get<UserService>(UserService)
    authService = module.get<AuthService>(AuthService)
    repo = module.get<Repository<User>>(getRepositoryToken(User))
  })

  describe('Register', () => {
    it('should be able to register user and return success message', async () => {
      // register new user
      const regStatus = await authService.register(user)

      expect(regStatus).toMatchObject({ success: true })
      expect(regStatus).toMatchObject({ message: 'User Registered' })
      expect(regStatus).toBeTruthy()
    })
  })

  describe('Login', () => {
    it('should be able to login with registered user and return token', async () => {
      // create new user
      const createdUser = await userService.add(user)

      // assign password to call login function
      const data = { ...createdUser, ...{ password: testUserPassword } }

      // login with creds
      const loginStatus = await authService.login(data)

      expect(loginStatus).toHaveProperty('accessToken')
      expect(loginStatus).toHaveProperty('expiresIn')
      expect(loginStatus).toBeTruthy()
    })

    it('should be able to validate logged in user to have token and expiresIn', async () => {
      // create new user
      const createdUser = await userService.add(user)

      // assign password to call login function
      const data = { ...createdUser, ...{ password: testUserPassword } }

      // login with creds
      await authService.login(data)

      // verify that user has logged in and has access token
      const validatedUser = await authService.validateUser(data)

      expect(validatedUser).toHaveProperty('uid')
      expect(validatedUser).toMatchObject({ uid: createdUser.uid })
      expect(validatedUser).toBeTruthy()
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
