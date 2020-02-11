import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '../post/post.entity';
import { Comment } from '../comment/comment.entity';
/**
 * User Entity
 */
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') user_id: string;
  @Column('text') name: string;
  @OneToMany(
    type => Post,
    post => post.user,
    {
      eager: true,
    },
  )
  posts: Post[];
  @OneToMany(
    type => Comment,
    comment => comment.user,
  )
  comments: Comment[];

  constructor(name?: string, posts?: []);
  constructor(name?: string) {
    this.name = name || '';
  }
}
