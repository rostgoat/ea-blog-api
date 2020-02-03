import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { UserService } from '../user/user.service';
import { PostService } from './post.service';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CommentService } from '../comment/comment.service';

class UserServiceMock extends UserService {}
class PostServiceMock extends PostService {}

/**
 * Post Controller Unit Test
 */
describe('Post Controller', () => {
  let postController: PostController;
  let postService: PostService;
  let repo: Repository<PostEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock,
        },
        {
          provide: PostService,
          useValue: PostServiceMock,
        },
        PostService,
        {
          provide: getRepositoryToken(PostEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    postService = module.get<PostService>(PostService);
    postController = module.get<PostController>(PostController);
    repo = module.get<Repository<PostEntity>>(getRepositoryToken(PostEntity));
  });

  it('should be defined', () => {
    expect(postController).toBeDefined();
  });
});
