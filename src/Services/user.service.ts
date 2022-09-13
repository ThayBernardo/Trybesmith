import UserModel from '../models/user.model';
import { ForCreateUser } from '../interfaces/user.interface';

export default class UserService {
  private model = new UserModel();

  public create = async (user: ForCreateUser): Promise<void> => this.model.create(user);
}