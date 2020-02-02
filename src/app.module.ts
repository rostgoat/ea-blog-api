import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ReviewsModule } from "./review/review.module";

@Module({
  imports: [UserModule, ReviewsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
