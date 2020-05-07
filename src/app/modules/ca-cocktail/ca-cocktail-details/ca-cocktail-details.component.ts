import { Component, Input, OnInit } from '@angular/core';
import { CaCocktail } from '../model/ca-cocktail.model';

@Component({
  selector: 'ca-cocktail-details',
  templateUrl: './ca-cocktail-details.component.html'
})
export class CaCocktailDetailsComponent implements OnInit {

  @Input()
  cocktail: CaCocktail;

  @Input()
  isEditState: boolean = false;

  @Input()
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
