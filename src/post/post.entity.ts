import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  BeforeInsert,
  JoinColumn,
  OneToOne,
} from 'typeorm'
import { User } from '../user/user.entity'
import { Comment } from '../comment/comment.entity'
import { v4 as uuid } from 'uuid'
import { Like } from '../like/like.entity'

/**
 * Post Entity
 */
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid') post_id: string
  @Column({ type: 'varchar', nullable: false, unique: true }) uid: string
  @Column('text') title: string
  @Column('text') sub_title: string
  @Column('text') content: string
  @Column({ type: 'date' }) created_at: Date
  @Column({ type: 'text' }) post_image_bucket_key: string

  @ManyToOne(
    type => User,
    user => user.posts,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(
    type => Comment,
    comment => comment.post,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'comment_id' })
  comments: Comment[]

  @OneToMany(
    type => Like,
    like => like.post,
    {
      eager: true,
    },
  )
  @JoinColumn({ name: 'like_id' })
  likes: Like[]

  constructor(title?: string, content?: string) {
    this.title = title || ''
    this.content = content || ''
  }

  @BeforeInsert() async generateUID() {
    this.uid = uuid()
    this.created_at = new Date()
  }
}
