import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as faker from 'faker';

describe('PostService', () => {
  let service: PostService;
  let repo: Repository<PostEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(PostEntity),
          // as a class value, Repository needs no generics
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PostService>(PostService);
    // Save the instance of the repository and set the correct generics
    repo = module.get<Repository<PostEntity>>(getRepositoryToken(PostEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
