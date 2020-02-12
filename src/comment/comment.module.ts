import { Module, forwardRef, Global } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '../post/post.module';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Comment]), forwardRef(() => PostModule)],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
