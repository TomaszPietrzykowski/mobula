import * as jwt from 'jsonwebtoken';

export const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
        expiresIn: '30d',
    });
};

export const decodeToken = (token: string) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded;
};
