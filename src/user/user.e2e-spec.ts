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
      imports: [
        UserModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'rm',
          password: 'root',
          database: 'ea_games_blog_test',
          entities: ['../**/*.entity.ts'],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  describe('Add', () => {
    const testUsername = faker.internet.userName()
    const testEmail = faker.internet.email()
    const testName = `${faker.name.firstName()} ${faker.name.lastName()}`

    const user: Partial<UserCreateDTO> = {
      name: testName,
      email: testEmail,
      username: testUsername,
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
