import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../footer/src/lib/footer.component';
import { MainViewComponent } from '../../../main-view/src/lib/main-view.component';
import { HeaderComponent } from '../../../header/src/lib/header.component';

@Component({
    selector: 'mobula-layout',
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    standalone: true,
    imports: [
        HeaderComponent,
        MainViewComponent,
        FooterComponent,
    ],
})
export class LayoutComponent {
    router = inject(Router);
}
