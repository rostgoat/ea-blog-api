import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { CommentEntity } from '../comment/comment.entity';
/**
 * Post Entity
 */
@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid') post_id: string;
  @Column('text') title: string;
  @Column('text') content: string;
  @ManyToOne(
    type => UserEntity,
    user => user.posts,
    {
      cascade: true,
    },
  )
  user: UserEntity;
  @OneToMany(
    type => CommentEntity,
    comment => comment.post,
    {
      cascade: true,
    },
  )
  comments: CommentEntity[];
}
