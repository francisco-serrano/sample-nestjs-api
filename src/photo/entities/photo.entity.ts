import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Photo')
export class PhotoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column({
    default: false
  })
  published: boolean;
}
