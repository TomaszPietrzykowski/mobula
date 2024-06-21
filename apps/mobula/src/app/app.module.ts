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

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        MobulaShellModule,
        LayoutModule,
        GlobalErrorHandlerModule,
    ],
    providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
    bootstrap: [AppComponent],
})
export class AppModule {}
