import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
/**
 * Post Entity
 */
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid') post_id: string;
  @Column('text') title: string;
  @Column('text') content: string;
  @ManyToOne(
    type => User,
    user => user.posts,
    {
      cascade: true,
    },
  )
  user: User;
  @OneToMany(
    type => Comment,
    comment => comment.post,
    {
      cascade: true,
    },
  )
  comments: Comment[];
}
