/* eslint-disable no-debugger */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, IUserLogin, IUserRegister } from '@mobula/model';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    http = inject(HttpClient);
    router = inject(Router);
    // loginEndpoint ='/api/auth/login';
    // registerEndpoint = '/api/auth/login';
    // userEndpoint = '/api/auth/user';
    loginEndpoint = 'https://api.realworld.io/api/users/login';
    registerEndpoint = 'https://api.realworld.io/api/users';
    userEndpoint = 'https://api.realworld.io/api/user';

    userSignal = signal<IUser | undefined | null>(undefined);

    redirectUrl: string | null = null;

    getUser(): void {
        this.http.get<{ user: IUser }>(this.userEndpoint).subscribe((res) => {
            localStorage.setItem('token', res.user.token);
            this.userSignal.set(res.user);
            if (this.redirectUrl) {
                this.router.navigateByUrl(this.redirectUrl);
            } else {
                this.router.navigateByUrl('/workspace');
                this.redirectUrl = null;
            }
        });
    }

    login(userData: IUserLogin): void {
        this.http
            .post<{ user: IUser }>(this.loginEndpoint, { user: userData })
            .subscribe({
                next: (res) => {
                    // TODO validate
                    localStorage.setItem('token', res.user.token);
                    this.userSignal.set(res.user);
                    if (this.redirectUrl) {
                        this.router.navigateByUrl(this.redirectUrl);
                    } else {
                        this.router.navigateByUrl('/workspace');
                        this.redirectUrl = null;
                    }
                },
                error: () => {
                    this.userSignal.set(null);
                },
            });
    }

    logout(): void {
        localStorage.removeItem('token');
        this.userSignal.set(null);
        this.router.navigateByUrl('/');
    }

    register(userData: IUserRegister): void {
        this.http
            .post<{ user: IUser }>(this.registerEndpoint, { user: userData })
            .subscribe((res) => {
                // TODO validate
                localStorage.setItem('token', res.user.token);
                this.userSignal.set(res.user);
                if (this.redirectUrl) {
                    this.router.navigateByUrl(this.redirectUrl);
                } else {
                    this.router.navigateByUrl('/workspace');
                    this.redirectUrl = null;
                }
            });
    }
}
