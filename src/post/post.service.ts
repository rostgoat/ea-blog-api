import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, getRepository } from 'typeorm';
import { Promise } from 'bluebird';

import { Post } from './post.entity';
import { PostDTO } from './post.dto';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';
import { toPostDto } from 'src/shared/mapper';
import { User } from 'src/user/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => CommentService))
    private readonly commentService: CommentService,
  ) {}

  /**
   * Create a new post and associate user to the post
   * @param data Object
   */
  async add(data: Partial<PostDTO>): Promise<Post> {
    // create object with new post props
    const newPost = await this.postRepository.create(data);
    // grab user by passed uid
    const user = await this.userService.findOneByUID(data.user_uid);

    console.log('user', user)
    if (user.uid === data.user_uid) {
      // grab related user and assign to user object of post
      newPost.user = user;
    } else {
      throw new Error("Invalid user!")
    }
    // save changes
    await this.postRepository.save(newPost);
    // return new post
    return toPostDto(newPost);
  }

  /**
   * Update a post related to a user
   * @param uid String
   * @param data Object
   */
  async edit(uid: string, data: Partial<PostDTO>) {
    await this.postRepository.update({ uid }, data);
    return await this.postRepository.findOne({ uid });
  }

  /**
   * Remove a post related to a user
   * @param uid String
   */
  async delete(uid: string) {
    // get all comments related to post
    const comments = await this.commentService.findAllByPostID(uid);

    // remove all comments related to post
    await Promise.each(comments, async comment => {
      await this.commentService.delete(comment.comment_id);
    });

    // delete post
    await this.postRepository.delete(uid);
    return { deleted: true };
  }

  /**
   * TODO: get rid of this and add a where arg into regular find
   * Find all posts related to post
   */
  async findAllByPostID(uid: string): Promise<Post[]> {
    return await this.postRepository.find({
      where: { uid },
    });
  }

  /**
   * Find all posts 
   */
  async findAll(): Promise<Post[]> {
    return await this.postRepository.find({select: ['uid', 'title', 'sub_title', 'content']});
  }

  /**
   * Find post
   * @param uid String
   */
  async findOne(uid: string): Promise<Post> {
    return await this.postRepository.findOne({
      relations: ['comments'],
      where: {
        uid,
      },
    });
  }
}
