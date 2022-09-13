import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ForCreateUser } from '../interfaces/user.interface';
import connection from './connection';

export default class UserModel {
  private connection: Pool = connection;

  public create = async ({ username, classe, level, password }: ForCreateUser): Promise<void> => {
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)', 
      [username, classe, level, password],
    );
  };
}