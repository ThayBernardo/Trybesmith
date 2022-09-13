import { Request, Response } from 'express';
import ProductService from '../Services/product.service';

export default class ProductController {
  private service = new ProductService();

  public create = async (req: Request, res: Response) => {
    const product = await this.service.create(req.body);
    res.status(201).json(product);
  };
}