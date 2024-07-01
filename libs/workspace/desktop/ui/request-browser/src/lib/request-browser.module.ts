import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestBrowserComponent } from './request-browser.component';

@NgModule({
    imports: [CommonModule],
    declarations: [RequestBrowserComponent],
    exports: [RequestBrowserComponent],
})
export class RequestBrowserModule { }
