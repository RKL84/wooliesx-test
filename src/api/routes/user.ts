import { Router } from 'express';
import { userController } from '../../controllers';
const route = Router();

export default (app: Router) => {
  app.use('/', route);
  route.get('/user', userController.getUser);
};
