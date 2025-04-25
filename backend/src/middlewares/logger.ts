// middlewares/logger.ts
import { Request, Response, NextFunction, RequestHandler } from 'express';

const logger: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export default logger;
