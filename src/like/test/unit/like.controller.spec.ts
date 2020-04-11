/**
 * * Nest Modules
 */
import { Test, TestingModule } from '@nestjs/testing'

/**
 * * Controllers
 */
import { LikeController } from '../../like.controller'

describe('Like Controller', () => {
  let controller: LikeController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikeController],
    }).compile()

    controller = module.get<LikeController>(LikeController)
  })
})
