import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MobulaShellModule } from '@mobula/mobula-shell';
import {
  GlobalErrorHandler,
  GlobalErrorHandlerModule,
} from '@mobula/global-error-handler';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MobulaShellModule, GlobalErrorHandlerModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
