import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseBrowserComponent } from './response-browser.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ResponseBrowserComponent],
  exports: [ResponseBrowserComponent],
})
export class ResponseBrowserModule {}
