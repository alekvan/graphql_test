import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dtos/create-product.dto';
import { UpdateProductInput } from './dtos/update-product.dto';
import { ProductsService } from './products.service';
import { ProductType } from './products.type';

@Resolver(() => ProductType)
export class ProductsResolver {
  constructor(private productService: ProductsService) {}

  @Query(() => ProductType)
  async product(@Args('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Query(() => ProductType)
  async products() {
    return this.productService.getProducts();
  }

  @Mutation(() => ProductType)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.createProduct(createProductInput);
  }

  @Mutation(() => ProductType)
  async updateProduct(
    @Args('id') id: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.updateProduct(id, updateProductInput);
  }

  @Mutation(() => ProductType)
  async deleteProduct(@Args('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
