import { Request, Response } from 'express';

export function getUsers(req: Request, res: Response) {
    // Logic to fetch users
    res.send('Get users 1');
}

export function createUser(req: Request, res: Response) {
    // Logic to create a user
    res.send('Create user');
}
