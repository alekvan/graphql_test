import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ImageType } from './images.type';
import { ImagesService } from './images.service';
import { CreateImageInput } from './dtos/create-image.dto';
import { UpdateImageInput } from './dtos/update-image.dto';

@Resolver(() => ImageType)
export class ImagesResolver {
  constructor(private imagesService: ImagesService) {}

  @Query(() => ImageType)
  image(@Args('id') id: string) {
    return this.imagesService.getImage(id);
  }
  @Query(() => [ImageType])
  images() {
    return this.imagesService.getImages();
  }

  @Mutation(() => ImageType)
  createImage(@Args('createImageInput') createImageInput: CreateImageInput) {
    return this.imagesService.createImage(createImageInput);
  }
  @Mutation(() => ImageType)
  deleteImage(@Args('id') id: string) {
    return this.imagesService.deleteImage(id);
  }
  @Mutation(() => ImageType)
  updateImage(
    @Args('id') id: string,
    @Args('updateImageInput') updateImageInput: UpdateImageInput,
  ) {
    return this.imagesService.updateImage(id, updateImageInput);
  }
}
