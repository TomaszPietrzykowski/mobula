import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MobulaShellModule } from '@mobula/mobula-shell';
import {
    GlobalErrorHandler,
    GlobalErrorHandlerModule,
} from '@mobula/global-error-handler';
import { LayoutModule } from '@mobula/layout';
import { MOBULA_ENV } from '@mobula/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@mobula/auth/data-access';

import { AppComponent } from './app.component';
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
        provideHttpClient(withInterceptors([authInterceptor])),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
