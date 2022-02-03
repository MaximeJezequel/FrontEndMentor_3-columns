import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'threecolumn';
  public cars;

  constructor() {
    this.cars = [
      {
        type: 'sedans',
        image: 'assets/images/icon-sedans.svg',
        text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        color: 'hsl(31, 77%, 52%)',
      },
      {
        type: 'suvs',
        image: 'assets/images/icon-suvs.svg',
        text: '  Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        color: 'hsl(184, 100%, 22%)',
      },
      {
        type: 'luxury',
        image: 'assets/images/icon-luxury.svg',
        text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        color: 'hsl(179, 100%, 13%)',
      },
    ];
  }

}
