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

    user = signal(undefined);

    constructor(private http: HttpClient) {}

    login(userData: IUserLogin): void {
        this.http.post(this.loginEndpoint, { ...userData });
    }

    register(userData: IUserRegister): void {
        console.log('register from service: ', userData);
        this.http
            .post<IUser>(this.registerEndpoint, { user: userData })
            .subscribe((res) => console.log(res));
    }
}
