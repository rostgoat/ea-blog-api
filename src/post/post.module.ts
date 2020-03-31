import { Module, forwardRef, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { UserModule } from '../user/user.module';
import { CommentModule } from '../comment/comment.module';
import { AppGateway } from '../app.gateway';
import { LikeModule } from '../like/like.module';

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
