import { Body, Controller, Param, Delete, Get, Post, Put, UsePipes } from '@nestjs/common';
import { PhotoService } from '../services/photo.service';
import { PhotoValidationPipe } from '../photo.validation.pipe';
import { PhotoAlbumService } from '../services/photoalbum.service';

@Controller('photos')
export class PhotoController {
  constructor(
    private photoService: PhotoService,
    private photoAlbumService: PhotoAlbumService
  ) { }

  @Get()
  async getPhotos() {
    return await this.photoService.getPhotos();
  }

  @Get(':photoID')
  async getPhoto(@Param('photoID') photoID) {
    return await this.photoService.getPhoto(photoID);
  }

  @Post()
  @UsePipes(new PhotoValidationPipe())
  async addPhoto(@Body() photo) {
    return await this.photoService.addPhoto(photo);
  }

  @Delete(':photoID')
  async deletePhoto(@Param('photoID') photoID) {
    return await this.photoService.deletePhoto(photoID);
  }

  @Put(':photoID')
  @UsePipes(new PhotoValidationPipe())
  async updatePhoto(@Param('photoID') photoID, @Body() photo) {
    return await this.photoService.updatePhoto(photoID, photo);
  }
}
