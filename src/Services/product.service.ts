import ProductModel from '../models/products.model';
import { ForCreateProduct, Product } from '../interfaces/product.inteface';

export default class ProductService {
  private model = new ProductModel();

  public create = async (user: ForCreateProduct): Promise<Product> => this.model.create(user);
}