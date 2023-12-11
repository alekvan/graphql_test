import { Module } from '@nestjs/common';
import { Product } from './products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { ProductsController } from './products.controller';
import { Image } from '../images/images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Image])],
  providers: [ProductsService, ProductsResolver],
  controllers: [ProductsController],
})
export class ProductModule {}
