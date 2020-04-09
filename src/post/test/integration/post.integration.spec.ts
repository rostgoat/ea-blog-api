/**
 * * Nest Modules
 */
import { Test } from '@nestjs/testing'
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'

/**
 * * Modules
 */
import { PostModule } from '../../post.module'
import { DatabaseModule } from '../../../database/database.module'
import { UserModule } from '../../../user/user.module'
import { LikeModule } from '../../../like/like.module'

/**
 * * Entities
 */
import { Post } from '../../post.entity'
import { User } from '../../../user/user.entity'

/**
 * * Services
 */
import { PostService } from '../../post.service'
import { UserService } from '../../../user/user.service'

/**
 * * DTOs
 */
import { PostDTO } from '../../dto/post.dto'
import { UserCreateDTO } from '../../../user/dto/user.create.dto'

/**
 * * Dependencies
 */
import * as faker from 'faker'

/**
 * Post Integrations tests
 */

/**
 * Test User Data
 */
const testUsername = faker.internet.userName()
const testEmail = faker.internet.email()
const testUserPassword = faker.internet.password()
const testName = `${faker.name.firstName()} ${faker.name.lastName()}`

/**
 * Test Post data
 */
const testTitle = faker.lorem.words()
const testSubTitle = faker.lorem.sentence()
const testContent = faker.lorem.paragraphs()
const testPostImageBucketKey = faker.random.uuid()

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
 * Test Post object
 */
let post: Partial<PostDTO> = {
  title: testTitle,
  sub_title: testSubTitle,
  content: testContent,
  post_image_bucket_key: testPostImageBucketKey,
}

/**
 * Posts integration tests
 */
describe('Post Integration Tests', () => {
  let postService: PostService
  let userService: UserService
  let postRepo: Repository<Post>
  let userRepo: Repository<User>

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        PostModule,
        UserModule,
        LikeModule,
        DatabaseModule,
        TypeOrmModule.forFeature([Post, User]),
      ],
      providers: [PostService, UserService],
    }).compile()

    postService = module.get<PostService>(PostService)
    userService = module.get<UserService>(UserService)
    postRepo = module.get<Repository<Post>>(getRepositoryToken(Post))
    userRepo = module.get<Repository<User>>(getRepositoryToken(User))
  })

  describe('Add', () => {
    it('should create a user is the DB', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      console.log('newPost', newPost)
      expect(newPost).toHaveProperty('uid')
      expect(newPost).toMatchObject({ title: testTitle })
      expect(newPost).toMatchObject({ sub_title: testSubTitle })
      expect(newPost).toMatchObject({ content: testContent })
      expect(newPost).toBeTruthy()
    })
  })

  /**
   * after each test, delete everything from users and posts table
   */
  afterEach(async () => {
    await postRepo.query(`DELETE FROM posts`)
    await userRepo.query(`DELETE FROM users`)
  })

  /**
   * after all tests are done, delete everything from users and posts table
   */
  afterAll(async () => {
    const connection = getConnection()

    await connection
      .createQueryBuilder()
      .delete()
      .from(Post)
      .from(User)
      .execute()

    await connection.close()
  })
})
