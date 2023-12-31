import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewModule } from '@mobula/main-view';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent, FooterModule } from '@mobula/footer';
import { HeaderModule, HeaderComponent } from '@mobula/header';

@NgModule({
  imports: [
    CommonModule,
    MainViewModule,
    RouterModule,
    FooterModule,
    HeaderModule,
  ],
  declarations: [LayoutComponent, FooterComponent, HeaderComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
