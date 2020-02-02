import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
/**
 * Post Entity
 */
@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid') post_id: string;
  @Column('text') title: string;
  @Column('text') content: string;
  @ManyToOne(
    type => UserEntity,
    user => user.posts,
  )
  user: UserEntity;
}
