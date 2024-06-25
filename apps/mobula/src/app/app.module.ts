import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MobulaShellModule } from '@mobula/mobula-shell';
import {
    GlobalErrorHandler,
    GlobalErrorHandlerModule,
} from '@mobula/global-error-handler';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@mobula/layout';
import { MOBULA_ENV } from '@mobula/environment';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        MobulaShellModule,
        LayoutModule,
        GlobalErrorHandlerModule,
    ],
    providers: [
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        { provide: MOBULA_ENV, useValue: environment },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
