import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { PhotoController } from './photo/controllers/photo.controller';
import { PhotoService } from './photo/services/photo.service';
import { PhotoAlbumController } from './photo/controllers/photoalbum.controller';
import { PhotoAlbumService } from './photo/services/photoalbum.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PhotoModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [
    PhotoController,
    PhotoAlbumController
  ],
  providers: [
    PhotoService,
    PhotoAlbumService
  ],
})
export class AppModule {
}
