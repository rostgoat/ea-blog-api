import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PostEntity } from '../post/post.entity';
import { UserEntity } from '../user/user.entity';
/**
 * Comments Entity
 */
@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid') comment_id: string;
  @Column('text') content: string;
  @ManyToOne(
    type => PostEntity,
    post => post.comments,
  )
  post: PostEntity;
  @ManyToOne(
    type => UserEntity,
    user => user.comments,
  )
  user: UserEntity;
}
