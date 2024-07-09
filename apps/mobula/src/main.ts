import { AppComponent } from './app/app.component';
import { MobulaShellModule } from '@mobula/mobula-shell';
import { RouterModule } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { authInterceptor } from '@mobula/auth/data-access';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from './environments/environment';
import { MOBULA_ENV } from '@mobula/environment';
import { GlobalErrorHandler } from '@mobula/global-error-handler';
import { ErrorHandler, importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, RouterModule, MobulaShellModule),
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        { provide: MOBULA_ENV, useValue: environment },
        provideHttpClient(withInterceptors([authInterceptor])),
    ]
})
    .catch((err) => console.error(err));
