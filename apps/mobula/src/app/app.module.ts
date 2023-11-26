import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MobulaShellModule } from '@mobula/mobula-shell';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MobulaShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
