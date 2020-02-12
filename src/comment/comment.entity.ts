import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from '../post/post.entity';
import { User } from '../user/user.entity';
/**
 * Comments Entity
 */
@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid') comment_id: string;
  @Column('text') content: string;
  @ManyToOne(
    type => Post,
    post => post.comments,
  )
  post: Post;
  @ManyToOne(
    type => User,
    user => user.comments,
  )
  user: User;
}
