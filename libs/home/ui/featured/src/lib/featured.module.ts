import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './featured.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeaturedComponent],
  exports: [FeaturedComponent],
})
export class FeaturedModule {}
