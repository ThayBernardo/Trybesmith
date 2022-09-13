import express from 'express';
import ProductController from './Controllers/product.controller';
import UserController from './Controllers/user.controller';

const productController = new ProductController();
const userController = new UserController();
const app = express();

app.use(express.json());
app.post('/products', productController.create);
app.get('/products', productController.getAll);

app.post('/users', userController.create);

export default app;
