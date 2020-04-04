import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Post } from '../post/post.entity'
import { User } from '../user/user.entity'

/**
 * Like Entity
 */
@Entity('likes')
export class Like {
  @PrimaryGeneratedColumn('uuid') like_id: string
  @Column({ type: 'varchar', nullable: false, unique: true }) uid: string
  @Column({ type: 'date' }) liked_at: Date
  @Column({ type: 'bool' }) post_liked: Boolean

  @ManyToOne(
    type => Post,
    post => post.likes,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(
    type => User,
    user => user.likes,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'user_id' })
  user: User

  @BeforeInsert() async generateUID() {
    this.uid = uuid()
    this.liked_at = new Date()
  }
}
