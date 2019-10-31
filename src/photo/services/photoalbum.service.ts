import { Injectable } from "@nestjs/common";
import { AlbumDTO } from "../dto/AlbumDTO";
import { Repository } from "typeorm";
import { PhotoAlbum } from "../entities/photoalbum.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PhotoAlbumService {

    constructor(
        @InjectRepository(PhotoAlbum)
        private readonly photoAlbumRepository: Repository<PhotoAlbum>
    ) {}

    async addAlbum(album: AlbumDTO) {
        await this.photoAlbumRepository.save(album);

        return await this.photoAlbumRepository.find();
    }

    async getAlbums(): Promise<PhotoAlbum[]> {
        return await this.photoAlbumRepository.find();       
    }

    async getAlbum(id: number): Promise<PhotoAlbum> {
        return await this.photoAlbumRepository.findOne(id);
    }
}