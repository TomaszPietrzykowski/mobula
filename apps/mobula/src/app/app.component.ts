import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@mobula/auth/data-access';

@Component({
    selector: 'mobula-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    authService = inject(AuthService);

    ngOnInit(): void {
        this.authService.getUser();
    }
}
