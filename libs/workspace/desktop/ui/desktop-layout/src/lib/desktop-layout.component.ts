import { Component } from '@angular/core';
import { ResponseBrowserComponent } from '../../../response-browser/src/lib/response-browser.component';
import { RequestBrowserComponent } from '../../../request-browser/src/lib/request-browser.component';

@Component({
    selector: 'mobula-desktop-layout',
    templateUrl: './desktop-layout.component.html',
    styleUrl: './desktop-layout.component.scss',
    standalone: true,
    imports: [RequestBrowserComponent, ResponseBrowserComponent],
})
export class DesktopLayoutComponent {}
