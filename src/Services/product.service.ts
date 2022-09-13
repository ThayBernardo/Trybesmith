import ProductModel from '../models/product.model';
import { ForCreateProduct, Product } from '../interfaces/product.inteface';

export default class ProductService {
  private model = new ProductModel();

  public create = async (product: ForCreateProduct): Promise<Product> => this.model.create(product);

  public getAll = async (): Promise<Product[]> => this.model.getAll();
}