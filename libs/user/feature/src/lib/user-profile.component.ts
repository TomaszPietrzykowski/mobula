import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobulaIconComponent } from '@mobula/ui-components';
import { AuthService } from '@mobula/auth/data-access';

@Component({
    selector: 'user-profile',
    standalone: true,
    imports: [CommonModule, MobulaIconComponent],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
    auth = inject(AuthService);
}
