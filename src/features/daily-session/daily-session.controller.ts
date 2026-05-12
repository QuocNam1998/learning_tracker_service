import { NextFunction, Request, Response } from 'express';
import { getAllDailySession } from './daily-session.queries';

const getDailySession = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await getAllDailySession();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export { getDailySession };
