import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Like } from './like.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LikeDTO } from './like.dto';
import { Promise } from 'bluebird';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';
import { toLikeDto } from 'src/shared/mapper';

@Injectable()
export class LikeService {
    constructor(
        @InjectRepository(Like)
        private likesRepository: Repository<Like>,
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        @Inject(forwardRef(() => PostService))
        private readonly postService: PostService,
      ) {}
    
      /**
       * Like a post and associate user and post to the like
       * @param data Object
       */
      async like(data: Partial<LikeDTO>): Promise<Like> {
        // extract data from request
        const {user_uid, post_uid} = data;

        // grab user by passed uid
        const user = await this.userService.findOneByUID(user_uid);

        // grab post by passed uid
        const post = await this.postService.findOne(post_uid);

        // data to save to db for new like
        const likeArgs = {
            post_liked: true,
            liked_at: Date.now(),
        }

        // create object with new like props
        const newLike = await this.likesRepository.create(likeArgs);

        // verify user is valid
        if (user.uid === user_uid) {
            // grab related user and assign to user object of like
            newLike.user = user;
            } else {
                throw new Error("Invalid user!")
        }

        // verify post is valid
        if (post.uid === post_uid) {
            // grab related user and assign to user object of like
            newLike.post = post;
          } 
          
          // save changes
          const {uid} = await this.likesRepository.save(newLike);
          // return new like
          post.likes.push(uid)
        return toLikeDto(newLike);
      }

      /**
       * Find post
       * @param uid String
       */
      async findOne(uid: string): Promise<Like> {
        return await this.likesRepository.findOne({
          where: {
            uid,
          },
        });
      }
}