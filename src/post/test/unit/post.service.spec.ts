/**
 * * Nest Modules
 */
import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

/**
 * * Services
 */
import { PostService } from '../../post.service'
import { UserService } from '../../../user/user.service'
import { CommentService } from '../../../comment/comment.service'
import { LikeService } from '../../../like/like.service'

/**
 * * Entities
 */
import { Post } from '../../post.entity'
import { User } from '../../../user/user.entity'

/**
 * * Dependencies
 */
import * as faker from 'faker'

// test data
const testPostUid = faker.random.uuid()
const testPostTitle = faker.lorem.word()
const testPostSubTitle = faker.lorem.words()
const testPostContent = faker.lorem.paragraphs()
const testPostDate = new Date()
const testPostUserUid = faker.random.uuid()

// test post #1
const testPost = new Post(
  testPostUid,
  testPostTitle,
  testPostSubTitle,
  testPostContent,
  testPostDate,
)

// test post #2
const testPost2 = new Post(
  testPostUid,
  testPostTitle,
  testPostSubTitle,
  testPostContent,
)

// test posts array
const testPosts = [testPost, testPost2]

// post DTO object to call in methods
let tempPost = {
  uid: testPostUid,
  title: testPostTitle,
  sub_title: testPostSubTitle,
  content: testPostContent,
  created_at: testPostDate,
}

// must provide all associated classes as mocks
class UserServiceMock extends UserService {}
class CommentServiceMock extends CommentService {}
class LikeServiceMock extends LikeService {}

describe('PostService', () => {
  let postService: PostService
  let postRepo: Repository<Post>
  let userRepo: Repository<User>
  let userService: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Post),
          // mocks of all the methods from the User Service
          useValue: {
            save: jest.fn(),
            create: jest.fn().mockReturnValue(testPost),
            find: jest.fn().mockResolvedValue(testPosts),
            findOne: jest.fn().mockResolvedValue(testPost),
            update: jest.fn().mockResolvedValue(testPost),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        CommentService,
        {
          provide: CommentService,
          useValue: CommentServiceMock,
        },
        LikeService,
        {
          provide: LikeService,
          useValue: LikeServiceMock,
        },
      ],
    }).compile()

    postService = module.get<PostService>(PostService)
    postRepo = module.get<Repository<Post>>(getRepositoryToken(Post))
    userRepo = module.get<Repository<User>>(getRepositoryToken(User))
  })

  describe('add', () => {
    it('should be able to create a post', async () => {
      const user = { uid: testPostUserUid }

      postRepo.findOne = jest.fn(() => null)
      userRepo.findOne = jest.fn(() => user.uid)

      await postService.add(tempPost)
      tempPost = Object.assign(tempPost, { user: testPostUserUid })
      expect(tempPost).toEqual(testPost)
      expect(postRepo.save).toBeCalledTimes(1)
    })
    it('should throw an error if a post is created with wrong user', async () => {})
  })

  describe('findOne', () => {
    it('should be able to get one post back', async () => {
      const repoSpy = jest.spyOn(postRepo, 'findOne')
      expect(postService.findOne(tempPost.uid)).resolves.toEqual(testPost)
      expect(repoSpy).toBeCalledWith({
        relations: ['comments', 'user'],
        select: [
          'post_id',
          'uid',
          'content',
          'created_at',
          'sub_title',
          'title',
          'post_image_bucket_key',
        ],
        where: { uid: tempPost.uid },
      })
    })
  })
})
