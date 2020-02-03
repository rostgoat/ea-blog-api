import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PostEntity } from '../post/post.entity';
import { CommentEntity } from '../comment/comment.entity';
/**
 * User Entity
 */
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') user_id: string;
  @Column('text') name: string;
  @OneToMany(
    type => PostEntity,
    post => post.user,
    {
      eager: true,
    },
  )
  posts: PostEntity[];
  @OneToMany(
    type => CommentEntity,
    comment => comment.user,
  )
  comments: CommentEntity[];
}
