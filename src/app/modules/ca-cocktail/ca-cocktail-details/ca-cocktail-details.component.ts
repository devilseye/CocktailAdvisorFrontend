import { Component, Input, OnInit } from '@angular/core';
import { CaCocktail } from '../model/ca-cocktail.model';

@Component({
  selector: 'app-ca-cocktail-details',
  standalone: false,
  templateUrl: './ca-cocktail-details.component.html'
})
export class CaCocktailDetailsComponent implements OnInit {

  @Input()
  cocktail: CaCocktail;

  constructor() {
  }

  ngOnInit() {
  }

}
