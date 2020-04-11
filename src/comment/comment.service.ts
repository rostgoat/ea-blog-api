import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Comment } from './comment.entity'
import { CommentDTO } from './dto/comment.dto'
import { PostService } from '../post/post.service'
import { UserService } from '../user/user.service'
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
  async add(data: Partial<CommentDTO>): Promise<Comment> {
    // create object with new comment props
    const newComment = await this.commentRepository.create(data)
    // grab related post and assign to comment object of post
    newComment.post = await this.postService.findOne(data.post_uid)
    // save changes
    await this.commentRepository.save(newComment)
    // return new comment
    return newComment
  }

  /**
   * Update a comment related to a user
   * @param uid String
   * @param data Object
   */
  async edit(uid: string, data: Partial<CommentDTO>) {
    await this.commentRepository.update({ uid }, data)
    return await this.commentRepository.findOne({ uid })
  }

  /**
   * Remove a comment related to a user
   * @param data String
   */
  async delete(uid: string) {
    await this.commentRepository.delete(uid)
    return { deleted: true }
  }

  /**
   *  TODO: get rid of this and pass custom where into regular find
   * Find all comments related to post
   */
  async findAllByPostID(post_id: string): Promise<Comment[]> {
    return await this.commentRepository.find({
      where: { post_id },
    })
  }

  /**
   * Find comment
   * @param uid String
   */
  async findOne(uid: string): Promise<Comment> {
    const foundComment = await this.commentRepository.findOne({
      where: {
        uid: uid,
      },
    })
    return foundComment
  }
}
