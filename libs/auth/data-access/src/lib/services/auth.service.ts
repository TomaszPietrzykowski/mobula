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

    // state
    userSignal = signal<IUser | undefined | null>(undefined);
    redirectUrl: string | null = null;

    isLoggedIn(): boolean {
        return this.userSignal() ? true : false;
    }

    register(userData: IUserRegister): void {
        console.log('from register: ', userData);
        this.http
            .post<IUser>('/api/auth/register', { ...userData })
            .subscribe((res) => {
                if (res && res.token) {
                    localStorage.setItem('token', res.token);
                    this.userSignal.set(res);
                    if (this.redirectUrl) {
                        this.router.navigateByUrl(this.redirectUrl);
                    } else {
                        this.router.navigateByUrl('/workspace');
                        this.redirectUrl = null;
                    }
                }
            });
    }

    login(userData: IUserLogin): void {
        this.http.post<IUser>('/api/auth/login', { ...userData }).subscribe({
            next: (res) => {
                if (res && res.token) {
                    localStorage.setItem('token', res.token);
                    this.userSignal.set(res);
                    if (this.redirectUrl) {
                        this.router.navigateByUrl(this.redirectUrl);
                    } else {
                        this.router.navigateByUrl('/workspace');
                        this.redirectUrl = null;
                    }
                }
            },
            error: () => {
                this.userSignal.set(null);
                localStorage.removeItem('token');
            },
        });
    }

    logout(): void {
        localStorage.removeItem('token');
        this.userSignal.set(null);
        this.router.navigateByUrl('/');
    }

    getUser(): void {
        this.http.get<IUser>('/api/auth/user').subscribe({
            next: (res) => {
                this.userSignal.set(res);
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
}
