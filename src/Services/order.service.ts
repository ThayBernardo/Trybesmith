import OrderModel from '../models/order.model';
import { OrderIdProduct } from '../interfaces/order.interface';

export default class OrderService {
  private model = new OrderModel();

  public getAll = async (): Promise<OrderIdProduct[]> => this.model.getAll();
}