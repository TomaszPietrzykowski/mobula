import { Request, Response, NextFunction } from 'express';

export const corsMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.setHeader('Access-Control-Expose-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, PUT, POST, PATCH, DELETE, HEAD, OPTIONS'
    );
    next();
};
