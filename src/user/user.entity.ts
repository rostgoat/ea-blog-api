import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
/**
 * User Entity
 */
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') user_id: string;
  @Column('text') name: string;
}
