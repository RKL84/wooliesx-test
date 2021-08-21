import { Router } from 'express';
import user from './routes/user';
import product from './routes/product';

export default () => {
  const app = Router();
  product(app);
  user(app);
  return app;
};
