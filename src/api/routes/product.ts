import { Router } from 'express';
import { productController } from '../../controllers';
const route = Router();

export default (app: Router) => {
  app.use('/products', route);
  route.get('/sort', productController.getProducts);
};
