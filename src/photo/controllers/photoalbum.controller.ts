import { Controller, Post, Body, Get } from "@nestjs/common";
import { PhotoAlbumService } from "../services/photoalbum.service";

@Controller('albums')
export class PhotoAlbumController {
    
    constructor(private photoAlbumService: PhotoAlbumService){}

    @Post()
    async addAlbum(@Body() album) {
        return await this.photoAlbumService.addAlbum(album);
    }
    
    @Get()
    async getAlbums() {
        return await this.photoAlbumService.getAlbums();
    }
}