import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { ForCreateProduct, Product } from '../interfaces/product.inteface';

export default class ProductModel {
  private connection: Pool = connection;

  public create = async ({ name, amount }: ForCreateProduct): Promise<Product> => {
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
      [name, amount],
    );
    return { id, name, amount } as Product;
  };

  public getAll = async (): Promise<Product[]> => {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return result as Product[];
  };
}
