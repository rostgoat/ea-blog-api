/**
 * * Nest Modules
 */
import { Injectable, forwardRef, Inject } from '@nestjs/common'

/**
 * * TypeORM Modules
 */
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'

/**
 * * Dependencies
 */
import { Promise } from 'bluebird'

/**
 * * DTOs
 */
import { PostDTO } from './dto/post.dto'

/**
 * * Entities
 */
import { Post } from './post.entity'

/**
 * * Services
 */
import { UserService } from '../user/user.service'
import { CommentService } from '../comment/comment.service'
import { LikeService } from '../like/like.service'

/**
 * * Utils
 */
import { toPostDto } from '../utils/mapper'

/**
 * Post Service class
 */
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => CommentService))
    private readonly commentService: CommentService,
    @Inject(forwardRef(() => LikeService))
    private readonly likeService: LikeService,
  ) {}

  /**
   * Create a new post and associate user to the post
   * @param data Object
   */
  async add(data: Partial<PostDTO>): Promise<Post> {
    // destructure args
    const { user_uid } = data

    // grab user by passed uid
    const user = await this.userService.findOne(user_uid)

    // create object with new post props
    const newPost = await this.postRepository.create(data)

    // assign user to post
    if (user.uid === user_uid) {
      // grab related user and assign to user object of post
      newPost.user = user
    } else {
      throw new Error('Invalid user!')
    }

    // save changes
    await this.postRepository.save(newPost)

    // return new post
    return toPostDto(newPost)
  }

  /**
   * Update a post related to a user
   * @param uid String
   * @param data Object
   */
  async edit(uid: string, data: Partial<PostDTO>) {
    await this.postRepository.update({ uid }, data)
    return await this.postRepository.findOne({ uid })
  }

  /**
   * Remove a post related to a user
   * @param uid String
   */
  async delete(uid: string) {
    // get all comments related to post
    const comments = await this.commentService.findAllByPostID(uid)

    // remove all comments related to post
    await Promise.each(comments, async comment => {
      await this.commentService.delete(comment.comment_id)
    })

    // delete post
    await this.postRepository.delete(uid)
    return { deleted: true }
  }

  /**
   * TODO: get rid of this and add a where arg into regular find
   * Find all posts related to post
   */
  async findAllByPostID(uid: string): Promise<Post[]> {
    return await this.postRepository.find({
      where: { uid },
    })
  }

  /**
   * Find all posts
   */
  async findAll(): Promise<Post[]> {
    let posts = await getRepository(Post)
      .createQueryBuilder('p')
      .distinctOn(['p.uid'])
      .addSelect('p.title', 'post_title')
      .addSelect('p.sub_title', 'post_subtitle')
      .addSelect('p.content', 'post_content')
      .addSelect('p.post_image_bucket_key', 'post_image_bucket_key')
      .addSelect('p.created_at', 'post_created_at')
      .addSelect('u.name', 'post_author')
      .leftJoin('p.likes', 'l')
      .innerJoin('p.user', 'u')
      .getRawMany()

    const likes = await this.likeService.findAllPostLikes()

    posts.forEach(post => {
      if (likes[post.p_uid]) {
        post.likes = [likes[post.p_uid]]
      }
    })

    return posts
  }

  /**
   * Find post
   * @param uid String
   */
  async findOne(uid: string): Promise<Post> {
    return await this.postRepository.findOne({
      select: [
        'post_id',
        'uid',
        'content',
        'created_at',
        'sub_title',
        'title',
        'post_image_bucket_key',
      ],
      relations: ['comments', 'user', 'likes'],
      where: {
        uid,
      },
    })
  }
}
