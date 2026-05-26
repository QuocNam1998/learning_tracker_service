import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(errorMessage: string, statusCode: number) {
    super(errorMessage);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  console.error(`[${new Date().toISOString()}] ${err.stack}`);

  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).json({ success: false, message: 'Invalid JSON in request body' });
    return;
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
    return;
  }

  res.status(500).json({ success: false, message: 'Something went wrong' });
};
