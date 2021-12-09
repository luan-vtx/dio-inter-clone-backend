import { Request, Response } from 'express';
import AppError from '../shared/error/AppError';

function globalErrors(err: Error, req: Request, res: Response) {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      data: err?.data,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}

export default globalErrors;
