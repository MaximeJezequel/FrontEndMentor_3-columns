import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../cars.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() car! : Car
  constructor() {}

  ngOnInit(): void {}
}
