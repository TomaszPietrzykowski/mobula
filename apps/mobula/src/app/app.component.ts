import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@mobula/auth/data-access';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'mobula-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
    authService = inject(AuthService);

    title = 'mobula';

    ngOnInit(): void {
        this.authService.getUser();
    }
}
