import { NextFunction, Request, Response } from 'express';
import { getAllDailySession, updateTaskQuery } from './daily-session.queries';
import { AppError } from '../../middlewares/errorHandler';

const getDailySession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const startedAt = req.query.startedAt;
    if (!startedAt) {
      throw new AppError(`startedAt is required`, 400);
    }
    const result = await getAllDailySession(startedAt.toString());
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new AppError(`Parameters are not valid`, 400);
    }

    const body = req.body;
    console.log('>>>req', req);

    console.log('>>>body', body);
    if (!body || typeof body !== 'object' || Array.isArray(body) || Object.keys(body).length === 0) {
      throw new AppError(`Request body must be a non-empty object`, 400);
    }

    const allowedFields = ['date', 'task', 'note', 'status', 'isCompleted'];
    const fields = Object.keys(body);
    console.log('>>>fields', fields);
    const invalidFields = fields.filter((f) => !allowedFields.includes(f));
    if (invalidFields.length > 0) {
      throw new AppError(`Invalid fields: ${invalidFields.join(', ')}`, 400);
    }

    const toSnakeCase = (s: string) => s.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
    const setClauses = fields.map((field, idx) => `${toSnakeCase(field)} = $${idx + 1}`).join(', ');
    const query = `UPDATE daily_session SET ${setClauses} WHERE id = $${fields.length + 1}`;
    const params = [...(Object.values(body) as Array<any>), id];
    const rows = await updateTaskQuery(query, params);
    console.log('>>>rows', rows);
    res.status(200).json('Update successfully');
  } catch (error) {
    next(error);
  }
};
export { getDailySession, updateTask };
