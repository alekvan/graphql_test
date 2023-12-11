import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUrl } from 'class-validator';

@InputType()
export class CreateImageInput {
  @IsUrl()
  @Field()
  url: string;

  @IsOptional()
  @Field({ defaultValue: 1000 })
  priority: number;

  @IsOptional()
  @Field({ nullable: true })
  associatedProductId: string;
}
