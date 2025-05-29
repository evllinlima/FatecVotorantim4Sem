import { Inject, Injectable } from '@nestjs/common';
import { ProductInterface } from 'src/products/product.interface';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @Inject('PRODUCT_ENTITY')
    private productEntity: typeof ProductEntity,
  ) {}

  // adicionando em um array e não no banco de dados
  create(product: ProductInterface): void {
    this.productEntity.create({... product});
  }
  update() {}
  async getById(id: number): Promise<ProductEntity> {
    // const product = await this.productEntity.findByPk(id);
    const product = await this.productEntity.findOne({
      where: {
        id: id,

      },
    })
    if (!product) throw Error('Produto não encontrado!');
    return product;
  }
  async list(): Promise<ProductEntity[]> {
    const products = await this.productEntity.findAll();
    return products;
  }
  delete() {}
}
