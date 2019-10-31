import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('photo_album')
export class PhotoAlbum {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;
}