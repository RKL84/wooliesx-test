import { Router } from 'express';
import { productController } from '../../controllers';
const route = Router();

export default (app: Router) => {
  app.use('/answers', route);
  route.get('/sort', productController.getProducts);
};
