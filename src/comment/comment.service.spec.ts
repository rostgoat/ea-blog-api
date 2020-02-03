import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { PostService } from '../post/post.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';

class PostServiceMock extends PostService {}

describe('CommentService', () => {
  let commentService: CommentService;
  let repo: Repository<CommentEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentService,
        {
          provide: getRepositoryToken(CommentEntity),
          useClass: Repository,
        },
        {
          provide: PostService,
          useValue: PostServiceMock,
        },
      ],
    }).compile();

    commentService = module.get<CommentService>(CommentService);
    repo = module.get<Repository<CommentEntity>>(
      getRepositoryToken(CommentEntity),
    );
  });

  it('should be defined', () => {
    expect(commentService).toBeDefined();
  });
});
