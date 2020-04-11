/**
 * * Nest Modules
 */
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

/**
 * * Services
 */
import { LikeService } from './like.service'

/**
 * * Controllers
 */
import { LikeController } from './like.controller'

/**
 * * Entities
 */
import { Like } from './like.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Like])],
  providers: [LikeService],
  controllers: [LikeController],
  exports: [LikeService],
})
export class LikeModule {}
