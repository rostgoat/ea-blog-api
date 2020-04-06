import { Test, TestingModule } from '@nestjs/testing'
import { PostController } from './post.controller'
import { PostService } from './post.service'
import { Repository } from 'typeorm'
import { Post } from './post.entity'
import { getRepositoryToken } from '@nestjs/typeorm'
import * as faker from 'faker'

const testPostUid = faker.random.uuid()
const testPostname1 = faker.internet.userName()
const testPostEmail1 = faker.internet.email()
const testPostPassword1 = faker.internet.password()
const testPostName1 = `${faker.name.firstName()} ${faker.name.lastName()}`

// user test object
const testPost = new Post(
  testPostUid,
  testPostName1,
  testPostEmail1,
  testPostname1,
  testPostPassword1,
)

/**
 * Post Controller Unit Test
 */
describe('Post Controller', () => {
  let postController: PostController
  let postService: PostService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useClass: Repository,
        },
        {
          provide: PostService,
          useValue: {
            add: jest.fn(() => true),
            edit: jest.fn(() => true),
            delete: jest.fn(() => true),
            findAll: jest.fn(() => true),
            findOne: jest.fn().mockImplementation((uid: string) =>
              Promise.resolve({
                uid: testPostUid,
              }),
            ),
          },
        },
      ],
    }).compile()

    postService = module.get<PostService>(PostService)
    postController = module.get<PostController>(PostController)
  })

  describe('add', () => {
    it('should be able to create a post', async () => {
      postController.create(testPost)
      expect(postService.add).toHaveBeenCalledWith(testPost)
    })
  })

  describe('findOne', () => {
    it('should be able to return a post', async () => {
      const req = { query: { uid: testPostUid } }
      jest
        .spyOn(postService, 'findOne')
        .mockImplementation(
          async (): Promise<Post> => Promise.resolve(testPostUid),
        )
      expect(await postController.findOne(req)).toEqual(testPostUid)
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
    jest.resetAllMocks()
  })
})
