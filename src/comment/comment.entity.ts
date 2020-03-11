import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, JoinColumn } from 'typeorm';
import { Post } from '../post/post.entity';
import { User } from '../user/user.entity';

import { v4 as uuid } from 'uuid';

/**
 * Comments Entity
 */
@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid') comment_id: string;
  @Column({ type: 'varchar', nullable: false, unique: true }) uid: string;
  @Column('text') content: string;
  @ManyToOne(
    type => Post,
    post => post.comments,
  )
  @JoinColumn({ name: 'post_id'})
  post: Post;
  

  @BeforeInsert() async createUID() {
    this.uid = uuid();
  }
}
