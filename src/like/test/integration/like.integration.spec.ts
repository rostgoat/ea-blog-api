/**
 * * Nest Modules
 */
import { Test } from '@nestjs/testing'
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'

/**
 * * Modules
 */
import { LikeModule } from '../../like.module'
import { UserModule } from '../../../user/user.module'
import { DatabaseModule } from '../../../database/database.module'
import { PostModule } from '../../../post/post.module'

/**
 * * Entities
 */
import { Like } from '../../like.entity'
import { User } from '../../../user/user.entity'
import { Post } from '../../../post/post.entity'

/**
 * * Services
 */
import { LikeService } from '../../like.service'
import { UserService } from '../../../user/user.service'
import { PostService } from '../../../post/post.service'

/**
 * * DTOs
 */
import { LikeDTO } from '../../dto/like.dto'
import { PostDTO } from '../../../post/dto/post.dto'
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
 * Test Post data
 */
const testTitle = faker.lorem.words()
const testSubTitle = faker.lorem.sentence()
const testContent = faker.lorem.paragraphs()
const testPostImageBucketKey = faker.random.uuid()

/**
 * Test Like Data
 */
const testPostLiked = false

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

/**
 * Test like object
 */

let like: Partial<LikeDTO> = {
  post_liked: testPostLiked,
}

/**
 * Second Test like object
 */

let like2: Partial<LikeDTO> = {
  post_liked: testPostLiked,
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
 * Test Post object
 */
let post2: Partial<PostDTO> = {
  title: testTitle,
  sub_title: testSubTitle,
  content: testContent,
  post_image_bucket_key: testPostImageBucketKey,
}

/**
 * Like Integrations tests
 */
describe('Like Integration Tests', () => {
  let userService: UserService
  let likeService: LikeService
  let postService: PostService
  let likeRepo: Repository<Like>
  let postRepo: Repository<Post>
  let userRepo: Repository<User>

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        UserModule,
        PostModule,
        UserModule,
        DatabaseModule,
        TypeOrmModule.forFeature([User, Post, Like]),
      ],
      providers: [UserService, PostService, LikeService],
    }).compile()

    userService = module.get<UserService>(UserService)
    likeService = module.get<LikeService>(LikeService)
    postService = module.get<PostService>(PostService)

    likeRepo = module.get<Repository<Like>>(getRepositoryToken(Like))
    userRepo = module.get<Repository<User>>(getRepositoryToken(User))
    postRepo = module.get<Repository<Post>>(getRepositoryToken(Post))
  })

  describe('Add', () => {
    it('should be able to like a post', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      // assign new user's uid and post's uid to like data object
      like = { ...like, ...{ user_uid: uid } }
      like = { ...like, ...{ post_uid: newPost.uid } }

      // like post for the first time
      const newLike = await likeService.add(like)

      expect(newLike).toHaveProperty('user')
      expect(newLike.user.uid).toEqual(newUser.uid)
      expect(newLike.post_liked).toBe(true)
      expect(newLike).toBeTruthy()
    })

    it('should be able to like a post and verify that post was liked', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      // assign new user's uid and post's uid to like data object
      like = { ...like, ...{ user_uid: uid } }
      like = { ...like, ...{ post_uid: newPost.uid } }

      // like post for the first time
      const newLike = await likeService.add(like)

      // get post that has been liked
      const likedPost = await postService.findOne(newPost.uid)

      expect(likedPost.likes.length).toBe(1)
      expect(likedPost.likes[0].uid).toBe(newLike.uid)
      expect(likedPost.likes[0].liked_at).toBeTruthy()
      expect(likedPost.likes[0].post_liked).toBe(true)
    })
  })

  describe('Edit', () => {
    it('should be able to unlike a post', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      // assign new user's uid and post's uid to like data object
      like = { ...like, ...{ user_uid: uid } }
      like = { ...like, ...{ post_uid: newPost.uid } }

      // like post for the first time
      const newLike = await likeService.add(like)

      // unlike a post
      const updatedLike = await likeService.edit(newLike.uid, newLike)

      // get updated post after unliking it
      const updatedPost = await postService.findOne(newPost.uid)

      expect(updatedLike.uid).toEqual(newLike.uid)
      expect(updatedLike.post_liked).toBe(false)
      expect(updatedLike).toBeTruthy()
      expect(updatedPost.likes[0].post_liked).toBe(false)
    })
  })

  describe('Find One', () => {
    it('should be able to get back a like from a post', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      // assign new user's uid and post's uid to like data object
      like = { ...like, ...{ user_uid: uid } }
      like = { ...like, ...{ post_uid: newPost.uid } }

      // like post for the first time
      const newLike = await likeService.add(like)

      // get like
      const foundLike = await likeService.findOne(newLike.uid)

      expect(foundLike.uid).toEqual(newLike.uid)
      expect(foundLike).toBeTruthy()
    })
  })

  describe('Find', () => {
    it('should be able to get back like count', async () => {
      // create user
      const newUser = await userService.add(user)

      // create second user
      const newUser2 = await userService.add(user2)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      // assign new user's uid and post's uid to like data object
      like = { ...like, ...{ user_uid: uid } }
      like = { ...like, ...{ post_uid: newPost.uid } }

      // like post for the first time
      await likeService.add(like)

      // assign the second user's uid and post's uid to like data object
      like2 = { ...like2, ...{ user_uid: newUser2.uid } }
      like2 = { ...like2, ...{ post_uid: newPost.uid } }

      // like post for the first time
      await likeService.add(like2)

      const count = await likeService.findLikeCount(newPost.uid)

      expect(count).toBe(2)
    })

    it('should be able to get back all likes that belong to a post', async () => {
      // create user
      const newUser = await userService.add(user)

      // create second user
      const newUser2 = await userService.add(user2)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      // assign new user's uid and post's uid to like data object
      like = { ...like, ...{ user_uid: uid } }
      like = { ...like, ...{ post_uid: newPost.uid } }

      // like post for the first time
      await likeService.add(like)

      // assign the second user's uid and post's uid to like data object
      like2 = { ...like2, ...{ user_uid: newUser2.uid } }
      like2 = { ...like2, ...{ post_uid: newPost.uid } }

      // like post for the first time
      await likeService.add(like2)

      // assign new user's uid to post data object
      post2 = { ...post2, ...{ user_uid: uid } }

      // create another post
      const newPost2 = await postService.add(post2)

      // assign new user's uid and post's uid to like data object
      like = { ...like, ...{ user_uid: uid } }
      like = { ...like, ...{ post_uid: newPost2.uid } }

      // like post for the first time
      await likeService.add(like)

      // assign the second user's uid and post's uid to like data object
      like2 = { ...like2, ...{ user_uid: newUser2.uid } }
      like2 = { ...like2, ...{ post_uid: newPost2.uid } }

      // like post for the first time
      await likeService.add(like2)

      const allLike = await likeService.findAllPostLikes()
      console.log('allLike', allLike)
    })
  })

  /**
   * after each test, delete everything from all tables
   */
  afterEach(async () => {
    await likeRepo.query(`DELETE FROM likes`)
    await postRepo.query(`DELETE FROM posts`)
    await userRepo.query(`DELETE FROM users`)
  })

  /**
   * after all tests are done, delete everything from all table
   */
  afterAll(async () => {
    const connection = getConnection()

    await connection
      .createQueryBuilder()
      .delete()
      .from(Like)
      .from(Post)
      .from(User)
      .execute()

    await connection.close()
  })
})
