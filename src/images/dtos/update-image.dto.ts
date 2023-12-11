import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUrl } from 'class-validator';

@InputType()
export class UpdateImageInput {
  @IsUrl()
  @Field()
  url: string;

  @IsOptional()
  @Field()
  priority: number;

  @IsOptional()
  @Field({ nullable: true })
  associatedProductId: string;
}
