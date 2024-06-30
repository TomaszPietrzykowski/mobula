import { Component, inject } from '@angular/core';
import { AuthService } from '@mobula/auth/data-access';

@Component({
    selector: 'mobula-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    authService = inject(AuthService);
}
