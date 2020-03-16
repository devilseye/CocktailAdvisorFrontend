import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaCocktailsPanelComponent } from './ca-cocktails-panel/ca-cocktails-panel.component';
import { CaCocktailDetailsComponent } from './ca-cocktail-details/ca-cocktail-details.component';

@NgModule({
  declarations: [CaCocktailsPanelComponent, CaCocktailDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class CaCocktailModule { }
