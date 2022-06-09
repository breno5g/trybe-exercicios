import { NextFunction, Request, Response } from 'express';
import { ErrorInterface } from '../interfaces';

class ErrorMiddleware {
  constructor() {}
  public throwError(
    err: ErrorInterface,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log(err.name, ':', err.message);

    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Interal server error' });
  }
}

export const errorMiddleware = new ErrorMiddleware();
