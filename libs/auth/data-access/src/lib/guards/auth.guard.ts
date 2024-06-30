import { Injectable, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    GuardResult,
    MaybeAsync,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    auth = inject(AuthService);
    router = inject(Router);
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): MaybeAsync<GuardResult> {
        console.log('State from guard: ', state);
        if (this.auth.userSignal()?.token && this.auth.userSignal()?.username) {
            console.log('condition met');
            return true;
        } else {
            console.log('condition not met');
            this.auth.redirectUrl = state.url;
            return this.router.createUrlTree(['login']);
        }
    }
}
