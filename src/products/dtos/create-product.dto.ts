import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';
import { ProductStatus } from '../products.entity';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  price: number;

  @IsEnum(ProductStatus)
  @IsOptional()
  @Field(() => ProductStatus, { defaultValue: ProductStatus.ACTIVE })
  status: ProductStatus;
}
