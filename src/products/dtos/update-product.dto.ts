import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';
import { ProductStatus } from '../products.entity';

@InputType()
export class UpdateProductInput {
  @IsOptional()
  @Field()
  name: string;

  @IsOptional()
  @Field()
  price: number;

  @IsEnum(ProductStatus)
  @IsOptional()
  @Field()
  status: ProductStatus;
}
