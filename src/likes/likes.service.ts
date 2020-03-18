import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Likes } from './likes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LikesDTO } from './likes.dto';
import { Promise } from 'bluebird';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';
import { toLikeDto } from 'src/shared/mapper';

@Injectable()
export class LikesService {
    constructor(
        @InjectRepository(Likes)
        private likesRepository: Repository<Likes>,
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        @Inject(forwardRef(() => PostService))
        private readonly postrService: PostService,
      ) {}
    
      /**
       * Like a post and associate user and post to the like
       * @param data Object
       */
      async like(data: Partial<LikesDTO>): Promise<Likes> {
        // extract data from request
        const {user_uid, post_uid} = data;

        // grab user by passed uid
        const user = await this.userService.findOneByUID(user_uid);

        // grab post by passed uid
        const post = await this.postrService.findOne(post_uid);

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
        await this.likesRepository.save(newLike);
        // return new like
        return toLikeDto(newLike);
      }
}
