import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ProductStatus } from './products.entity';

registerEnumType(ProductStatus, { name: 'ProductStatus' });

@ObjectType('Product')
export class ProductType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  price: number;

  @Field(() => ProductStatus)
  status: ProductStatus;

  @Field(() => [String])
  images: string[];
}
