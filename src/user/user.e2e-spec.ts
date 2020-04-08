import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '../app.module'
import { UserModule } from './user.module'
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm'
import { Repository, getConnection } from 'typeorm'
import { User } from './user.entity'
import supertest = require('supertest')
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserCreateDTO } from './user.create.dto'
import { join } from 'path'

describe('User Integration', () => {
  let repository: Repository<User>
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
          entities: [join(__dirname, '../**/*.entity.ts')],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UserService],
      controllers: [UserController],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  describe('POST', () => {
    const user: Partial<UserCreateDTO> = {
      name: 'Mike Test User',
      email: 'usertest@gmail.com',
    }
    it('should create a user is the DB', async () => {
      const res = await service.add(user)
      console.log('res', res)
    })
  })
  // afterEach(async () => {
  //   await repository.query(`DELETE FROM users;`)
  // })

  // afterAll(async () => {
  //   const connection = getConnection()

  //   await connection
  //     .createQueryBuilder()
  //     .delete()
  //     .from(User)
  //     .execute()

  //   await connection.close()
  // })
})
