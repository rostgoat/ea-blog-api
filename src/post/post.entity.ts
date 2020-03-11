import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  BeforeInsert,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
import { v4 as uuid } from 'uuid';

/**
 * Post Entity
 */
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid') post_id: string;
  @Column({ type: 'varchar', nullable: false, unique: true }) uid: string;
  @Column('text') title: string;
  @Column('text') sub_title: string;
  @Column('text') content: string;
  @ManyToOne(
    type => User,
    user => user.posts,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'user_id'})
  user: User;

  @OneToMany(
    type => Comment,
    comment => comment.post,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'comment_id'})
  comments: Comment[];

  constructor(title?: string, content?: string) {
    this.title = title || '';
    this.content = content || '';
  }

  @BeforeInsert() async generateUID() {
    this.uid = uuid();
  }
}
