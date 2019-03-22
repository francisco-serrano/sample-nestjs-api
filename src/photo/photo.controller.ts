import { Body, Controller, Param, Delete, Get, Post, Put } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photos')
export class PhotoController {
  constructor(private photoService: PhotoService) {
  }

  @Get()
  async getPhotos() {
    return await this.photoService.getPhotos();
  }

  @Get(':photoID')
  async getPhoto(@Param('photoID') photoID) {
    return await this.photoService.getPhoto(photoID);
  }

  @Post()
  async addPhoto(@Body() photo) {
    return await this.photoService.addPhoto(photo);
  }

  @Delete(':photoID')
  async deletePhoto(@Param('photoID') photoID) {
    return await this.photoService.deletePhoto(photoID);
  }

  @Put(':photoID')
  async updatePhoto(@Param('photoID') photoID, @Body() photo) {
    return await this.photoService.updatePhoto(photoID, photo);
  }
}
