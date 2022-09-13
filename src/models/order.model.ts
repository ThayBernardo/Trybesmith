import { Pool } from 'mysql2/promise';
import connection from './connection';
import { OrderIdProduct } from '../interfaces/order.interface';

export default class ProductModel {
  private connection: Pool = connection;

  // Referencia JSON_ARRAYAGG
  // https://universodosdados.com/tag/json_arrayagg
  public getAll = async (): Promise<OrderIdProduct[]> => {
    const [result] = await this.connection.execute(
      `SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId,
      JSON_ARRAYAGG(products.id) as productsIds
      FROM Trybesmith.Products as products JOIN Trybesmith.Orders
      ON Trybesmith.Orders.id = products.orderId
      GROUP BY Trybesmith.Orders.id
      ORDER BY Trybesmith.Orders.userId`,
    );
    return result as OrderIdProduct[];
  };
}