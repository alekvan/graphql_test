import { Module } from '@nestjs/common';
import { ImagesResolver } from './images.resolver';
import { ImagesService } from './images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './images.entity';
import { ImagesController } from './images.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [ImagesService, ImagesResolver],
  controllers: [ImagesController],
})
export class ImageModule {}
