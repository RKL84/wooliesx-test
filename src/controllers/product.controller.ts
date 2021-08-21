import { Request, Response, NextFunction } from 'express';
import { productService } from '../services';

export const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const sortOption: SortOption = req.query.sortOption as SortOption;
  const productCollection = await productService.getProducts(sortOption);
  res.status(200).json(productCollection);
};
