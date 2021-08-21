import { Request, Response, NextFunction } from 'express';
import { productService } from '../services';

export const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const productCollection = await productService.getProducts(req.query.sortOption);
  res.status(200).json(productCollection);
};
