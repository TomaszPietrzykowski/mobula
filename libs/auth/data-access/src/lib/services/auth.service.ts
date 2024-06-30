/* eslint-disable no-debugger */
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { IUser, IUserLogin, IUserRegister } from '@mobula/model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // loginEndpoint ='/api/auth/login';
    // registerEndpoint = '/api/auth/login';
    loginEndpoint = 'https://api.realworld.io/api/users/login';
    registerEndpoint = 'https://api.realworld.io/api/users';

    userSignal = signal<IUser | undefined | null>(undefined);

    constructor(private http: HttpClient) {}

    login(userData: IUserLogin): void {
        this.http
            .post<{ user: IUser }>(this.loginEndpoint, { user: userData })
            .subscribe((res) => {
                console.log('response: ', res);
                // TODO validate
                localStorage.setItem('token', res.user.token);
                this.userSignal.set(res.user);
            });
    }

    register(userData: IUserRegister): void {
        console.log('register from service: ', userData);
        this.http
            .post<{ user: IUser }>(this.registerEndpoint, { user: userData })
            .subscribe((res) => {
                console.log('response: ', res);
                // TODO validate
                localStorage.setItem('token', res.user.token);
                this.userSignal.set(res.user);
            });
    }
}
