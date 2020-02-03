import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PostEntity } from '../post/post.entity';
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
}
