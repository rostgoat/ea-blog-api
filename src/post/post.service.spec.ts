import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as faker from 'faker';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';

class UserServiceMock extends UserService {}
class CommentServiceMock extends CommentService {}

describe('PostService', () => {
  let service: PostService;
  let repo: Repository<Post>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useClass: Repository,
        },
        {
          provide: UserService,
          useValue: UserServiceMock,
        },
        {
          provide: CommentService,
          useValue: CommentServiceMock,
        },
      ],
    }).compile();

    service = module.get<PostService>(PostService);
    repo = module.get<Repository<Post>>(getRepositoryToken(Post));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
