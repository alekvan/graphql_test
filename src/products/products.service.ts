import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dtos/create-product.dto';
import { UpdateProductInput } from './dtos/update-product.dto';
import { Injectable } from '@nestjs/common';
import { Image } from '../images/images.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async getProduct(id: string): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async createProduct(
    createProductInput: CreateProductInput,
  ): Promise<Product> {
    const product = this.productRepository.create(createProductInput);
    return this.productRepository.save(product);
  }

  async updateProduct(
    id: string,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    await this.productRepository.update({ id }, { ...updateProductInput });
    return this.productRepository.findOne({ where: { id } });
  }

  async deleteProduct(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    await this.imageRepository.delete({ associatedProductId: id });
    await this.productRepository.remove(product);
    return product;
  }
}
