import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    JoinColumn,
    OneToOne,
  } from 'typeorm';
  import { v4 as uuid } from 'uuid';
import { Post } from 'src/post/post.entity';
import { User } from 'src/user/user.entity';
  
  /**
   * Likes Entity
   */
  @Entity('likes')
  export class Likes {
    @PrimaryGeneratedColumn('uuid') like_id: string;
    @Column({ type: 'varchar', nullable: false, unique: true }) uid: string;
    @Column({ type: "date" }) liked_at: Date;
    @Column({ type: "boolean" }) post_liked: Boolean;
  
    @OneToOne(type => Post)
    @JoinColumn({ name: 'post_id'})
    post: Post

    @OneToOne(type => User)
    @JoinColumn({ name: 'user_id'})
    user: User

    @BeforeInsert() async generateUID() {
      this.uid = uuid();
      this.liked_at = new Date();
    }
  }
  