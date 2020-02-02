import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
/**
 * User Entity
 */
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') user_id: string;
  @Column('text') name: string;
  @Column('text') email: string;
  @CreateDateColumn() created_date: Date;
}
