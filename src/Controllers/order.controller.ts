import { Request, Response } from 'express';
import OrderService from '../Services/order.service';

export default class OrderController {
  private service = new OrderService();

  public getAll = async (req: Request, res: Response) => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };
}