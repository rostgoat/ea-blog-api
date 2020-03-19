import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, getRepository, getManager, createQueryBuilder } from 'typeorm';
import { Promise } from 'bluebird';

import { Post } from './post.entity';
import { PostDTO } from './post.dto';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';
import { toPostDto } from 'src/shared/mapper';
import { User } from 'src/user/user.entity';
import { PhotoService } from 'src/photo/photo.service';
import { LikeService } from 'src/like/like.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => CommentService))
    private readonly commentService: CommentService,
    @Inject(forwardRef(() => PhotoService))
    private readonly photoService: PhotoService,
    @Inject(forwardRef(() => LikeService))
    private readonly likeService: LikeService,
  ) {}

  /**
   * Create a new post and associate user to the post
   * @param data Object
   */
  async add(data: Partial<PostDTO>): Promise<Post> {
    // add new date property
    data = Object.assign(data, { created_at: Date.now()})

    // create object with new post props
    const newPost = await this.postRepository.create(data);

    // grab user by passed uid
    const user = await this.userService.findOneByUID(data.user_uid);

    if (user.uid === data.user_uid) {
      // grab related user and assign to user object of post
      newPost.user = user;
    } else {
      throw new Error("Invalid user!")
    }

    const photo = await this.photoService.findOneByUID(data.post_image_uid);
    if (photo.uid === data.post_image_uid) {
      // grab related user and assign to user object of post
      newPost.photo = photo;
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
    return await getRepository(Post)
    .createQueryBuilder('p')
    .select(['p.uid'])
    .addSelect('p.title', 'post_title')
    .addSelect('p.sub_title', 'post_subtitle')
    .addSelect('p.content', 'post_content')
    .addSelect('p.created_at', 'post_created_at')
    .addSelect('u.name', 'post_author')
    .addSelect('l.uid', 'like_uid')
    .addSelect('l.post_liked', 'post_liked')
    .addSelect('ph.title', 'photo_title')
    .addSelect('ph.path', 'path')
    .leftJoin('p.likes', 'l')
    .innerJoin('p.photo', 'ph')
    .innerJoin('p.user', 'u')
    .getRawMany()
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
