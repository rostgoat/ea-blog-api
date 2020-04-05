import { Test, TestingModule } from '@nestjs/testing'
import { PostService } from './post.service'
import { Repository } from 'typeorm'
import { Post } from './post.entity'
import { getRepositoryToken } from '@nestjs/typeorm'
import * as faker from 'faker'
import { UserService } from '../user/user.service'
import { CommentService } from '../comment/comment.service'
import { LikeService } from '../like/like.service'
import { User } from '../user/user.entity'

// test data
const testPostUid = faker.random.uuid()
const testPostTitle = faker.lorem.word()
const testPostSubTitle = faker.lorem.words()
const testPostContent = faker.lorem.paragraphs()
const testPostDate = faker.date.recent()
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
const tempPost = {
  uid: testPostUid,
  title: testPostTitle,
  sub_title: testPostSubTitle,
  content: testPostContent,
  created_at: testPostDate,
  user: faker.random.uuid(),
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
            // findOne: jest.fn().mockResolvedValue(testPost),
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
      const user = { uid: faker.random.uuid() }

      postRepo.findOne = jest.fn(() => null)
      userRepo.findOne = jest.fn(() => user.uid)

      await postService.add(tempPost)
      expect(tempPost).toEqual(testPost)
      expect(postRepo.save).toBeCalledTimes(1)
    })
    it('should throw an error if a post is created with wrong user', async () => {})
  })
})
