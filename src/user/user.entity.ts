import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PostEntity } from 'src/post/post.entity';
/**
 * User Entity
 */
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') user_id: string;
  @Column('text') name: string;
  @OneToMany(
    type => PostEntity,
    post => post.user,
  )
  posts: PostEntity[];
}
