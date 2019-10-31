import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PhotoAlbum } from './photoalbum.entity';

@Entity('photo')
export class Photo {

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

  @Column('int', {nullable: true})
  albumId: number;

  @JoinColumn({name: 'albumId'})
  @ManyToOne(type => PhotoAlbum, album => album.id)
  album: PhotoAlbum;
}
