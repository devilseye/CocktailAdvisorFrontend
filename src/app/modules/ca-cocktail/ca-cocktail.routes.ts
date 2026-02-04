import { Routes } from '@angular/router';
import { CaCocktailDetailsComponent } from './ca-cocktail-details/ca-cocktail-details.component';
import { CaCocktailsPanelComponent } from './ca-cocktails-panel/ca-cocktails-panel.component';

export const cocktailRoutes: Routes = [
  {
    path: '',
    component: CaCocktailsPanelComponent
  },
  {
    path: 'cocktails/:id',
    component: CaCocktailDetailsComponent
  }
];
