import { Router } from 'express';
import { trolleyController } from '../../controllers';
const route = Router();

export default (app: Router) => {
  app.use('/answers', route);
  route.get('/trolleyTotal', trolleyController.calculateTrolleyTotal);
};
