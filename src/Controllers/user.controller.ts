import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import UserService from '../Services/user.service';

const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
  
const JWT_SECRET = process.env.SECRET || 'Teste';

export default class UserController {
  private service = new UserService();

  public create = async (req: Request, res: Response) => {
    const { username } = req.body;
    await this.service.create(req.body);
    const token = jwt.sign({ username }, JWT_SECRET, jwtConfig);
    return res.status(201).json({ token });
  };
}
