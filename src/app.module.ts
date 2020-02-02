import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ReviewsModule } from "./review/review.module";
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, ReviewsModule, CommentModule],
  controllers: [],
  providers: []
})
export class AppModule {}
