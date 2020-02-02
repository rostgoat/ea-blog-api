import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserModule } from "./user/user.module";
import { ReviewsModule } from "./review/review.module";
import { CommentModule } from "./comment/comment.module";

/**
 * Root Module
 */
@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ReviewsModule, CommentModule],
  controllers: [],
  providers: []
})
export class AppModule {}
