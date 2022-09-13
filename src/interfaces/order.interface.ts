export interface Order {
  id: number;
  userId: number;
}

export interface OrderIdProduct extends Order {
  productsIds: number[];
}