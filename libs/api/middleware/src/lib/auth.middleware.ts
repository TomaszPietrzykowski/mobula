import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // console.log('body', req.body);

    // if (req.body?.token) {
    //     next();
    // }
    // res.status(401).json('Unauthorized');
    next();
};
