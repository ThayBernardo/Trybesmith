export interface User {
  id: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}
    
export type ForCreateUser = Omit<User, 'id'>;