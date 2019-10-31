import { Module } from '@nestjs/common';
import { PhotoController } from './controllers/photo.controller';
import { PhotoService } from './services/photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { PhotoAlbumController } from './controllers/photoalbum.controller';
import { PhotoAlbumService } from './services/photoalbum.service';
import { PhotoAlbum } from './entities/photoalbum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo, PhotoAlbum])],
  controllers: [PhotoController, PhotoAlbumController],
  providers: [PhotoService, PhotoAlbumService],
})
export class PhotoModule {
}
