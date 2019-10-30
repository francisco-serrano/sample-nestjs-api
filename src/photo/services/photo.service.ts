import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from '../entities/photo.entity';
import { Repository } from 'typeorm';
import { PhotoDTO } from '../dto/PhotoDTO';

@Injectable()
export class PhotoService {

  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photoRepository: Repository<PhotoEntity>,
  ) {
  }

  async getPhotos(): Promise<PhotoEntity[]> {
    return await this.photoRepository.find();
  }

  async getPhoto(photoID): Promise<PhotoEntity> {
    const id = Number(photoID);

    const photo = await this.photoRepository.findOne(id);

    if (!photo) {
      throw new HttpException('Photo does not exist!', 404);
    }

    return photo;
  }

  async addPhoto(photoDTO: PhotoDTO): Promise<PhotoEntity[]> {
    await this.photoRepository.save(photoDTO);

    return await this.photoRepository.find();
  }

  async updatePhoto(photoID, photoDTO: PhotoDTO): Promise<PhotoEntity[]> {
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

  async deletePhoto(photoID): Promise<PhotoEntity[]> {
    const id = Number(photoID);

    await this.photoRepository.delete(id);

    return await this.photoRepository.find();
  }
}
