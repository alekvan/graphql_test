import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './images.entity';
import { Repository } from 'typeorm';
import { CreateImageInput } from './dtos/create-image.dto';
import { UpdateImageInput } from './dtos/update-image.dto';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private imagesRepository: Repository<Image>,
  ) {}

  async getImage(id: string): Promise<Image> {
    return this.imagesRepository.findOne({ where: { id } });
  }

  async getImages(): Promise<Image[]> {
    return this.imagesRepository.find();
  }

  async createImage(createImageInput: CreateImageInput): Promise<Image> {
    const { associatedProductId, url, priority } = createImageInput;
    const image = this.imagesRepository.create({
      associatedProductId,
      url,
      priority,
    });
    return this.imagesRepository.save(image);
  }

  async updateImage(
    id: string,
    updateImageInput: UpdateImageInput,
  ): Promise<Image> {
    await this.imagesRepository.update({ id }, { ...updateImageInput });
    return this.imagesRepository.findOne({ where: { id } });
  }

  async deleteImage(id: string): Promise<Image> {
    const image = await this.imagesRepository.findOne({ where: { id } });
    await this.imagesRepository.delete({ id });
    return image;
  }
}
