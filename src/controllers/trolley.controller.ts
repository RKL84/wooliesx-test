import { Request, Response, NextFunction } from 'express';
import { trolleyService } from '../services';

export const calculateTrolleyTotal = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 
  const total = await trolleyService.calculateTrolleyTotal(req.body);
  res.status(200).json(total);
};
