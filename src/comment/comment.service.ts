import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './comment.entity';
import { CommentDTO } from './comment.dto';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';
@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @Inject(forwardRef(() => PostService))
    private readonly postService: PostService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  /**
   * Create a new comment
   * @param data Object
   */
  async add(data: CommentDTO): Promise<Comment> {
    // create object with new comment props
    const newComment = await this.commentRepository.create(data);
    // grab related post and assign to comment object of post
    newComment.post = await this.postService.findOne(data.post_id);
    // grab related user and assign to comment object of post
    newComment.user = await this.userService.findOne(data.user_id);
    // save changes
    await this.commentRepository.save(newComment);
    // return new comment
    return newComment;
  }

  /**
   * Update a comment related to a user
   * @param comment_id String
   * @param data Object
   */
  async edit(comment_id: string, data: Partial<CommentDTO>) {
    await this.commentRepository.update({ comment_id }, data);
    return await this.commentRepository.findOne({ comment_id });
  }

  /**
   * Remove a comment related to a user
   * @param data Object
   */
  async delete(comment_id: string) {
    await this.commentRepository.delete(comment_id);
    return { deleted: true };
  }

  /**
   * Find all comments related to post
   */
  async findAllByPostID(post_id: string): Promise<Comment[]> {
    return await this.commentRepository.find({
      where: { post_id },
    });
  }

  /**
   * Find comment
   * @param comment_id String
   */
  async findOne(comment_id: string): Promise<Comment> {
    const foundComment = await this.commentRepository.findOne({
      where: {
        comment_id: comment_id,
      },
    });
    return foundComment;
  }
}
