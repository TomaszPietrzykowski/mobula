import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewModule } from '@mobula/main-view';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MainViewModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
