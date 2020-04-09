import { Test, TestingModule } from '@nestjs/testing'
import { CommentService } from '../../comment.service'
import { PostService } from '../../../post/post.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Comment } from '../../comment.entity'
import { Repository } from 'typeorm'

class PostServiceMock extends PostService {}

describe('CommentService', () => {
  let commentService: CommentService
  let repo: Repository<Comment>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentService,
        {
          provide: getRepositoryToken(Comment),
          useClass: Repository,
        },
        {
          provide: PostService,
          useValue: PostServiceMock,
        },
      ],
    }).compile()

    commentService = module.get<CommentService>(CommentService)
    repo = module.get<Repository<Comment>>(getRepositoryToken(Comment))
  })

  it('should be defined', () => {
    expect(commentService).toBeDefined()
  })
})
