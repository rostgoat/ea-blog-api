import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    OneToOne,
    JoinColumn,
  } from 'typeorm';
  import { v4 as uuid } from 'uuid';
import { Post } from '../post/post.entity';
  
  /**
   * Photo Entity
   */
  @Entity('photos')
  export class Photo {
    @PrimaryGeneratedColumn('uuid') photo_id: string;
    @Column({ type: 'varchar', nullable: false, unique: true }) uid: string;
    @Column({ type: "varchar", nullable: false }) path: string;
    @Column('text') title: string;
  
    @OneToOne(type => Post, {
      cascade: true,
    })
    @JoinColumn({ name: 'post_id'})
    post: Post

    @BeforeInsert() async generateUID() {
      this.uid = uuid();
    }
  }
  