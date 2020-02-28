import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { Post } from '../post/post.entity';
import { Comment } from '../comment/comment.entity';
import { v4 as uuid } from 'uuid';
const bcrypt = require('bcrypt');
/**
 * User Entity
 */
@Entity('users')
export class User {
  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
    this.uid = uuid();
  }

  @PrimaryGeneratedColumn('uuid') user_id: string;
  @Column({ type: 'varchar', nullable: false, unique: true }) uid: string;
  @Column({ type: 'varchar', nullable: false }) name: string;
  @Column({ type: 'varchar', nullable: false, unique: true }) username: string;
  @Column({ type: 'varchar', nullable: false }) password: string;

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
