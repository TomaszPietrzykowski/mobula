import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, withViewTransitions } from '@angular/router';
import { appShellRoutes } from './lib.routes';

@NgModule({
    imports: [CommonModule],
    providers: [provideRouter(appShellRoutes, withViewTransitions())],
})
export class MobulaShellModule { }
