import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  JoinColumn,
  OneToOne,
} from 'typeorm'
import { Post } from '../post/post.entity'
import { Comment } from '../comment/comment.entity'
import { v4 as uuid } from 'uuid'
import * as bcrypt from 'bcrypt'
import { Like } from '../like/like.entity'

/**
 * User Entity
 */
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') user_id: string
  @Column({ type: 'varchar', nullable: false, unique: true }) uid: string
  @Column({ type: 'varchar', nullable: false }) name: string
  @Column({ type: 'varchar', nullable: false, unique: true }) email: string
  @Column({ type: 'varchar', nullable: false, unique: true }) username: string
  @Column({ type: 'varchar', nullable: false }) password: string

  @OneToMany(
    type => Post,
    post => post.user,
    {
      eager: true,
    },
  )
  @JoinColumn({ name: 'post_id' })
  posts: Post[]

  @OneToMany(
    type => Like,
    like => like.user,
    {
      eager: true,
    },
  )
  @JoinColumn({ name: 'like_id' })
  likes: Like[]

  constructor(
    name?: string,
    email?: string,
    username?: string,
    password?: string,
    posts?: [],
  )
  constructor(
    name?: string,
    email?: string,
    username?: string,
    password?: string,
  ) {
    this.name = name || ''
    this.email = email || ''
    this.username = username || ''
    this.password = password || ''
  }

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
    this.uid = uuid()
  }
}
