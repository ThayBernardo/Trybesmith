import express from 'express';
import ProductController from './Controllers/product.controller';

const productController = new ProductController();
const app = express();

app.use(express.json());
app.post('/products', productController.create);

export default app;
