import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { ProductInterface } from './product.interface';
import { CreateProductService } from './services/create-product.service';

@Controller('product')
export class ProductController {
  constructor(
    private listProductService: ListProductService,
    private getProductByIdService: GetProductByIdService,
    private createProductService: CreateProductService,
  ) {}
  @Get()
  list(): ProductInterface[] {
    const productList = this.listProductService.execute(); //listar os produtos
    return productList;
  }
  @Get(':id')
  getById(@Param('id') id: number): ProductInterface {
    const product = this.getProductByIdService.execute(id);
    return product;
  }

  @Post()
  create(@Body() product: ProductInterface) {
    this.createProductService.execute(product);
    return product;
  }
}
