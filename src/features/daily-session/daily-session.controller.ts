import { NextFunction, Request, Response } from 'express';
import { getAllDailySession, updateTaskQuery } from './daily-session.queries';
import { AppError } from '../../middlewares/errorHandler';

const getDailySession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const startedAt = req.query.startedAt
    if(!startedAt) {
      throw new AppError(`startedAt is required`, 400)
    }
    const result = await getAllDailySession(startedAt.toString());
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { startedAt, fields } = req.body
    if(!startedAt ) {
      throw new AppError(`Parameters are not valid`, 400)
    }
    const setClauses = Object.keys(fields).map((field, idx) => `${field} = $${idx + 1}`).join(', ');
    const query = `update daily_session
    set ${setClauses}
    where date = $${Object.keys(fields).length + 1}`
    const params = [...Object.values(fields), startedAt];
    console.log('>>>query', query)
    console.log('>>>params', params)

    const result = await updateTaskQuery(query, params);
    console.log('>>>result', result)
    res.status(200).json('Update successfully');
  } catch(error){
    next(error)
  }
}
export { getDailySession, updateTask };
