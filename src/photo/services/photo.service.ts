import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from '../entities/photo.entity';
import { Repository } from 'typeorm';
import { PhotoDTO } from '../dto/PhotoDTO';
import { PhotoAlbum } from '../entities/photoalbum.entity';
import { PhotoAlbumService } from './photoalbum.service';

@Injectable()
export class PhotoService {

  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
    private photoAlbumService: PhotoAlbumService
  ) {}

  async getPhotos(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async getPhoto(photoID): Promise<Photo> {
    const id = Number(photoID);

    const photo = await this.photoRepository.findOne(id);

    if (!photo) {
      throw new HttpException('Photo does not exist!', 404);
    }

    return photo;
  }

  async addPhoto(dto: PhotoDTO): Promise<Photo[]> {
    const album = await this.photoAlbumService.getAlbum(dto.album_id);

    if (!album) {
      throw new HttpException('Album does not exist!', 404);
    }
    
    const photo = new Photo();
    photo.name = dto.name;
    photo.description = dto.description;
    photo.filename = dto.filename;
    photo.published = dto.published;
    photo.views = dto.views;
    photo.album = album;
    
    await this.photoRepository.save(photo);

    const photos = await this.photoRepository.find();

    return await photos;
  }

  async updatePhoto(photoID, photoDTO: PhotoDTO): Promise<Photo[]> {
    const id = Number(photoID);

    const photo = await this.photoRepository.findOne(id);

    if (!photo) {
      throw new HttpException('Photo does not exist!', 404);
    }

    photo.name = photoDTO.name;
    photo.description = photoDTO.description;
    photo.filename = photoDTO.filename;
    photo.views = photoDTO.views;
    photo.published = photoDTO.published; 

    await this.photoRepository.save(photo);

    return await this.photoRepository.find();
  }

  async deletePhoto(photoID): Promise<Photo[]> {
    const id = Number(photoID);

    await this.photoRepository.delete(id);

    return await this.photoRepository.find();
  }
}