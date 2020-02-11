import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promise } from 'bluebird';

import { Post } from './post.entity';
import { PostDTO } from './post.dto';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';

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
   * Create a new post
   * @param data Object
   */
  async add(data: Partial<PostDTO>): Promise<Post> {
    // create object with new post props
    const newPost = await this.postRepository.create(data);
    // grab related user and assign to user object of post
    newPost.user = await this.userService.findOne(data.user_id);
    // save changes
    await this.postRepository.save(newPost);
    // return new post
    return newPost;
  }

  /**
   * Update a post related to a user
   * @param post_id String
   * @param data Object
   */
  async edit(post_id: string, data: Partial<PostDTO>) {
    await this.postRepository.update({ post_id }, data);
    return await this.postRepository.findOne({ post_id });
  }

  /**
   * Remove a post related to a user
   * @param data Object
   */
  async delete(post_id: string) {
    // get all comments related to post
    const comments = await this.commentService.findAllByPostID(post_id);

    // remove all comments related to post
    await Promise.each(comments, async comment => {
      await this.commentService.delete(comment.comment_id);
    });

    // delete post
    await this.postRepository.delete(post_id);
    return { deleted: true };
  }

  /**
   * Find all posts related to post
   */
  async findAllByPostID(post_id: string): Promise<Post[]> {
    return await this.postRepository.find({
      where: { post_id },
    });
  }

  /**
   * Find post
   * @param data Object
   */
  async findOne(post_id: string): Promise<Post> {
    return await this.postRepository.findOne({
      relations: ['comments'],
      where: {
        post_id,
      },
    });
  }
}
