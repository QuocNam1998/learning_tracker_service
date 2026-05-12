import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../middlewares/errorHandler';
import { getAllWeeks } from './weeks.queries';

export const getWeeks = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const weeks = await getAllWeeks();
    res.status(200).json(weeks);
  } catch (err) {
    next(new AppError((err as Error).message, 500));
  }
};
