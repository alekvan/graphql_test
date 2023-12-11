import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Image')
export class ImageType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  url: string;

  @Field(() => Number)
  priority: number;

  @Field(() => String, { nullable: true })
  associatedProductId: string | null;
}
