import { Component } from '@angular/core';
import { HeroComponent } from '../../../ui/hero/src/lib/hero.component';

@Component({
    selector: 'mobula-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [HeroComponent],
})
export class HomeComponent {
  throwError() {
    throw new Error('Custom test error kaboom!');
  }
}
