export interface IUser {
    id: string;
    name: string;
    email: string;
    image: string;
    token: string;
}
export interface IUserRegister {
    username: string;
    email: string;
    password: string;
}
export interface IUserLogin {
    email: string;
    password: string;
}
