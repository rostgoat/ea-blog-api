import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { UserService } from '../user/user.service';
import { PostService } from '../post/post.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';

class UserServiceMock extends UserService {}
class PostServiceMock extends PostService {}
class CommentServiceMock extends CommentService {}

describe('Comment Controller', () => {
  let commentController: CommentController;
  let commentService: CommentService;
  let repo: Repository<CommentEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentController],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock,
        },
        {
          provide: PostService,
          useValue: PostServiceMock,
        },
        {
          provide: CommentService,
          useValue: CommentServiceMock,
        },
        CommentService,
        {
          provide: getRepositoryToken(UserEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    commentService = module.get<CommentService>(CommentService);
    repo = module.get<Repository<CommentEntity>>(
      getRepositoryToken(CommentEntity),
    );
    commentController = module.get<CommentController>(CommentController);
  });

  it('should be defined', () => {
    expect(commentController).toBeDefined();
  });
});
