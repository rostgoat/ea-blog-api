import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
  } from 'typeorm';
  import { v4 as uuid } from 'uuid';
  
  /**
   * Photo Entity
   */
  @Entity('photos')
  export class Photo {
    @PrimaryGeneratedColumn('uuid') photo_id: string;
    @Column({ type: 'varchar', nullable: false, unique: true }) uid: string;
    @Column({ type: "varchar", nullable: false }) path: string;
    @Column('text') title: string;
  
    @BeforeInsert() async generateUID() {
      this.uid = uuid();
    }
  }
  