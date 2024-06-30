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
        _: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): MaybeAsync<GuardResult> {
        if (this.auth.isLoggedIn()) {
            return true;
        } else {
            this.auth.redirectUrl = state.url;
            return this.router.createUrlTree(['login']);
        }
    }
}
