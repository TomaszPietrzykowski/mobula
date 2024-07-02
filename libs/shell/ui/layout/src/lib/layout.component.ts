import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'mobula-layout',
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
})
export class LayoutComponent {
    router = inject(Router);
}
