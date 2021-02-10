import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  cocktail: Cocktail;

  constructor() {}

  ngOnInit(): void {}
}
