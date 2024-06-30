import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '@mobula/db-model';
import { generateToken } from '@mobula/utils';

export function getUser(req: Request, res: Response) {
    // Logic to fetch user details
    res.send('Get users 1');
}

export const register = asyncHandler(async (req: Request, res: Response) => {
    console.log('Body: ', req.body);
    const { username, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        username,
        email,
        password,
    });

    if (user) {
        const updatedUser = await user.save();

        res.status(201).json({
            id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            // workspaces: updatedUser.workspaces,
            // activeWorkspace: updatedUser.activeWorkspace,
            image: updatedUser.image,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id as unknown as string),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

export function login(req: Request, res: Response) {
    // Logic to create a user
    res.send('Create user');
}
