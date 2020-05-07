import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaCocktailsPanelComponent } from './ca-cocktails-panel/ca-cocktails-panel.component';
import { CaCocktailDetailsComponent } from './ca-cocktail-details/ca-cocktail-details.component';
import { CaCocktailCardComponent } from './ca-cocktail-details/ca-cocktail-card/ca-cocktail-card.component';

@NgModule({
  declarations: [CaCocktailsPanelComponent, CaCocktailDetailsComponent, CaCocktailCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CaCocktailsPanelComponent, CaCocktailDetailsComponent, CaCocktailCardComponent]
})
export class CaCocktailModule { }
