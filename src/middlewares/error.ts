import { Request, Response, NextFunction } from 'express';
import GlobalError from '../errors/global.error';

export default (err: GlobalError, req: Request, res: Response, next: NextFunction) => {
	res.status(err.code).json({ message: err.message });
}