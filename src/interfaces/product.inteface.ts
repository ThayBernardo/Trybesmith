export interface Product {
  id: number;
  name: string;
  amount: string;
}
  
export type ForCreateProduct = Omit<Product, 'id'>;
