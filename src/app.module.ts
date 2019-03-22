import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { PhotoController } from './photo/photo.controller';
import { PhotoService } from './photo/photo.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PhotoModule,
  ],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class AppModule {
}
