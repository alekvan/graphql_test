import { Product } from '../products/products.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column({ nullable: true })
  associatedProductId: string;
  @ManyToOne(() => Product, (product) => product.images, {
    nullable: true,
    eager: true,
  })
  associatedProduct: Product;

  @Column({ default: 1000 })
  priority: number;
}
