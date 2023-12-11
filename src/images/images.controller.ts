import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageInput } from './dtos/create-image.dto';
import { UpdateImageInput } from './dtos/update-image.dto';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get()
  async images() {
    return this.imagesService.getImages();
  }

  @Get(':id')
  async image(@Param('id') id: string) {
    return this.imagesService.getImage(id);
  }

  @Post()
  async createImage(@Body() createImageInput: CreateImageInput) {
    return this.imagesService.createImage(createImageInput);
  }

  @Patch(':id')
  async updateImage(
    @Param('id') id: string,
    @Body() updateImageInput: UpdateImageInput,
  ) {
    return this.imagesService.updateImage(id, updateImageInput);
  }

  @Delete(':id')
  async deleteImage(@Param('id') id: string) {
    return this.deleteImage(id);
  }
}
