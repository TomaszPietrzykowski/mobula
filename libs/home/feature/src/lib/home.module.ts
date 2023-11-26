import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeroModule } from '@mobula/hero';
import { FeaturedModule } from '@mobula/featured';

@NgModule({
  imports: [
    CommonModule,
    HeroModule,
    FeaturedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
