import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@mobula/auth/data-access';

@Component({
    selector: 'mobula-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    authService = inject(AuthService);
    router = inject(Router);

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (this.router.url == "/") {
                    document.body.style.setProperty('--header-height', `65px`);
                } else {
                    document.body.style.setProperty('--header-height', `50px`);
                }
            }
        });
    }
}
