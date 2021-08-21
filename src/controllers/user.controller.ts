import { Request, Response, NextFunction } from 'express';
import { userService } from '../services';

export const getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userInfo = await userService.getUser();
  res.status(200).json(userInfo);
};
