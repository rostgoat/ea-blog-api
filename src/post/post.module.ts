/**
 * * Nest Modules
 */
import { Module, forwardRef, Global } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

/**
 * * Controllers
 */
import { PostController } from './post.controller'

/**
 * * Services
 */
import { PostService } from './post.service'

/**
 * * Entities
 */
import { Post } from './post.entity'

/**
 * * Modules
 */
import { UserModule } from '../user/user.module'
import { CommentModule } from '../comment/comment.module'
import { LikeModule } from '../like/like.module'

/**
 * * Gateways
 */
import { AppGateway } from '../app.gateway'

/**
 * Post Module
 */
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    forwardRef(() => UserModule),
    forwardRef(() => CommentModule),
    forwardRef(() => LikeModule),
  ],
  controllers: [PostController],
  providers: [PostService, AppGateway],
  exports: [PostService],
})
export class PostModule {}
