import { Request, Response, NextFunction } from "express";

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
  const appErr = err as AppError;
  const message = appErr.isOperational ? appErr.message : "Something went wrong";
  const statusCode = appErr.statusCode || 500;
  console.error(`[${new Date().toISOString()}] ${err.stack}`);
  res.status(statusCode).json({ success: false, message });
};
