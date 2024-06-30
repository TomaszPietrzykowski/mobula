import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '@mobula/db-model';
import { generateToken, decodeToken } from '@mobula/utils';
import { JwtPayload } from 'jsonwebtoken';

export const getUser = asyncHandler(async (req: Request, res: Response) => {
    if (!req.headers.authorization?.startsWith('Bearer')) {
        res.status(401);
        throw new Error('Unauthorized');
    } else {
        const token = req.headers.authorization?.split(' ')[1];
        const decoded: JwtPayload = decodeToken(token) as JwtPayload;
        const user = await User.findById(decoded.id).select('-password');

        if (user) {
            res.json({
                id: user._id,
                username: user.username,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    }
});

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

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        if (await user.matchPassword(password)) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id as unknown as string),
            });
        } else {
            res.status(401);
            throw new Error('Unauthorized: invalid login or password');
        }
    } else {
        res.status(404);
        throw new Error('Invalid user data');
    }
});
