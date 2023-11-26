import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from './desktop-layout.component';
import { RequestBrowserModule } from '@mobula/request-browser';
import { ResponseBrowserModule } from '@mobula/response-browser';

@NgModule({
  imports: [CommonModule, RequestBrowserModule, ResponseBrowserModule],
  declarations: [DesktopLayoutComponent],
  exports: [DesktopLayoutComponent],
})
export class DesktopLayoutModule {}
