import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { ProductInterface } from './product.interface';
import { CreateProductService } from './services/create-product.service';
import { Response } from 'express';
import { ProductEntityInterface } from 'src/database/entities/product.interface';


@Controller('product')
export class ProductController {
  constructor(
    private listProductService: ListProductService,
    private getProductByIdService: GetProductByIdService,
    private createProductService: CreateProductService,
  ) {}

  @Get()
  async list(): Promise<ProductEntityInterface[]> {
    const productList = await this.listProductService.execute();
    return productList;
  }

  @Get(':id')
  getById(@Param('id') id: string): ProductInterface {
    const product = this.getProductByIdService.execute(Number(id));

    return product;
  }

  @Post()
  @HttpCode(201)
  create(@Body() product: ProductInterface, @Res() res: Response) {
    const { name, value, description, brandId } = product;
    if (!(name, value && description && brandId)) {
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios.',
      });
      return;
    }

    this.createProductService.execute(product);
    res.send();
  }
}
