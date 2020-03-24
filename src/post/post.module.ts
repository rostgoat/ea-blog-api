import { Module, forwardRef, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { UserModule } from '../user/user.module';
import { CommentModule } from '../comment/comment.module';
import { AppGateway } from 'src/app.gateway';
import { LikeModule } from 'src/like/like.module';
import { PhotoModule } from 'src/photo/photo.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    forwardRef(() => UserModule),
    forwardRef(() => CommentModule),
    forwardRef(() => LikeModule),
    forwardRef(() => PhotoModule),
  ],
  controllers: [PostController],
  providers: [PostService, AppGateway],
  exports: [PostService],
})
export class PostModule {}
