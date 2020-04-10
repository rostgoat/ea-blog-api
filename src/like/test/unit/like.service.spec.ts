/**
 * * Nest Modules
 */
import { Test, TestingModule } from '@nestjs/testing'

/**
 * * Services
 */
import { LikeService } from '../../like.service'

describe('LikeService', () => {
  let service: LikeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikeService],
    }).compile()

    service = module.get<LikeService>(LikeService)
  })
})
