import { Component } from '@angular/core';

@Component({
  selector: 'mobula-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  throwError() {
    throw new Error('Custom test error kaboom!');
  }
}
