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
      async add(data: Partial<LikeDTO>): Promise<Like> {
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
          
          // assign like to a post
          post.likes.push(uid)
          
          // return new like
          return toLikeDto(newLike);
      }

      async edit(data: Partial<LikeDTO>): Promise<Like> {
        const { uid, post_liked } = data;
        console.log('post_liked', post_liked)
        // check status of like/dislike
        let updatedLikeStatus = !post_liked;

        console.log('updatedLikeStatus', updatedLikeStatus)
        // update like status in db
        await this.likesRepository.update({ uid }, {post_liked: updatedLikeStatus});

        // return status and uid of like
        const updatedLike = await this.likesRepository.findOne({ uid });
        return toLikeDto(updatedLike);
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

      async checkLikedStatus(uid: string): Promise<Boolean> {
        return await this.likesRepository.findOne({
          where: {
            uid,
            liked_post: true
          }
        })
      }
}
