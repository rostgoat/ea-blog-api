/**
 * * Nest Modules
 */
import { Test } from '@nestjs/testing'
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'

/**
 * * Modules
 */
import { CommentModule } from '../../../comment/comment.module'
import { PostModule } from '../../../post/post.module'
import { DatabaseModule } from '../../../database/database.module'
import { UserModule } from '../../../user/user.module'
import { LikeModule } from '../../../like/like.module'

/**
 * * Entities
 */
import { Post } from '../../../post/post.entity'
import { User } from '../../../user/user.entity'
import { Comment } from '../../../comment/comment.entity'

/**
 * * Services
 */
import { PostService } from '../../../post/post.service'
import { UserService } from '../../../user/user.service'
import { CommentService } from '../../../comment/comment.service'

/**
 * * DTOs
 */
import { PostDTO } from '../../../post/dto/post.dto'
import { UserCreateDTO } from '../../../user/dto/user.create.dto'
import { CommentDTO } from '../../../comment/dto/comment.dto'

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
 * Test Comment data
 */
const testCommentContent = faker.lorem.words()

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
 * Test Post object 2
 */
let post2: Partial<PostDTO> = {
  title: testTitle,
  sub_title: testSubTitle,
  content: testContent,
  post_image_bucket_key: testPostImageBucketKey,
}

/**
 * Test Comment object
 */
let comment: Partial<CommentDTO> = {
  content: testCommentContent,
}

/**
 * Test Comment object
 */
let comment2: Partial<CommentDTO> = {
  content: testCommentContent,
}

/**
 * Posts integration tests
 */
describe('Post Integration Tests', () => {
  let postService: PostService
  let userService: UserService
  let commentService: CommentService

  let postRepo: Repository<Post>
  let userRepo: Repository<User>
  let commentRepo: Repository<Comment>

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        PostModule,
        UserModule,
        LikeModule,
        CommentModule,
        DatabaseModule,
        TypeOrmModule.forFeature([Post, User, Comment]),
      ],
      providers: [PostService, UserService, Comment],
    }).compile()

    postService = module.get<PostService>(PostService)
    userService = module.get<UserService>(UserService)
    commentService = module.get<CommentService>(CommentService)

    postRepo = module.get<Repository<Post>>(getRepositoryToken(Post))
    userRepo = module.get<Repository<User>>(getRepositoryToken(User))
    commentRepo = module.get<Repository<Comment>>(getRepositoryToken(Comment))
  })

  describe('Add', () => {
    it('should be able to comment on a post', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      comment = { ...comment, ...{ post_uid: newPost.uid } }
      // comment on a post
      const newComment = await commentService.add(comment)

      expect(newComment).toHaveProperty('post')
      expect(newComment).toHaveProperty('comment_id')
      expect(newComment).toMatchObject({ content: testCommentContent })
      expect(newComment).toBeTruthy()
    })
  })

  describe('Edit', () => {
    const newContent = faker.lorem.words()
    it('should be able to edit a comment on a post', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      comment = { ...comment, ...{ post_uid: newPost.uid } }

      // comment on a post
      const originalComment = await commentService.add(comment)

      // edit comment
      const editedComment = await commentService.edit(originalComment.uid, {
        content: newContent,
      })

      expect(originalComment.content).not.toBe(editedComment.content)
      expect(editedComment.content).toBeTruthy()
    })
  })

  describe('Delete', () => {
    it('should be able to delete a comment on a post', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      comment = { ...comment, ...{ post_uid: newPost.uid } }

      // comment on a post
      const originalComment = await commentService.add(comment)

      // delete comment
      const deletedComment = await commentService.delete(originalComment.uid)

      expect(deletedComment).toMatchObject({ deleted: true })
    })

    it('should be able to delete all comments when post is deleted', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      comment = { ...comment, ...{ post_uid: newPost.uid } }

      // comment on a post
      const originalComment = await commentService.add(comment)

      // delete comment
      await postService.delete(newPost.uid)

      // find a comment
      const foundComment = await commentService.findOne(originalComment.uid)

      expect(foundComment).toBeUndefined()
    })
  })

  describe('Find', () => {
    it('should be able to find all comments related to a post', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      comment = { ...comment, ...{ post_uid: newPost.uid } }

      comment2 = { ...comment2, ...{ post_uid: newPost.uid } }

      // comment on a post
      await commentService.add(comment)

      // comment on a post
      await commentService.add(comment2)

      // find all comments
      const allComments = await commentService.findAllByPostID(newPost.uid)

      expect(allComments.length).toBe(2)
    })
  })

  describe('Find One', () => {
    it('should be able to find a specific comment', async () => {
      // create user
      const newUser = await userService.add(user)

      // extract uid from new user
      const { uid } = newUser

      // assign new user's uid to post data object
      post = { ...post, ...{ user_uid: uid } }

      // create post
      const newPost = await postService.add(post)

      comment = { ...comment, ...{ post_uid: newPost.uid } }

      // comment on a post
      const newComment = await commentService.add(comment)

      // find a comment
      const foundComment = await commentService.findOne(newComment.uid)

      expect(foundComment).toBeTruthy()
      expect(foundComment.uid).toBe(newComment.uid)
    })
  })

  /**
   * after each test, delete everything from users, comments and posts table
   */
  afterEach(async () => {
    await postRepo.query(`DELETE FROM comments`)
    await postRepo.query(`DELETE FROM posts`)
    await userRepo.query(`DELETE FROM users`)
  })

  /**
   * after all tests are done, delete everything from users, comments and posts table
   */
  afterAll(async () => {
    const connection = getConnection()

    await connection
      .createQueryBuilder()
      .delete()
      .from(Comment)
      .from(Post)
      .from(User)
      .execute()

    await connection.close()
  })
})
