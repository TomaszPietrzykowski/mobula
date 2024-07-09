import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'mobula-main-view',
    templateUrl: './main-view.component.html',
    styleUrl: './main-view.component.scss',
    standalone: true,
    imports: [RouterOutlet],
})
export class MainViewComponent {}
