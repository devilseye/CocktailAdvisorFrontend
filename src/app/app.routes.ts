import { Routes } from '@angular/router';
import { CaPostPanelComponent } from './modules/ca-shared/ca-post-panel/ca-post-panel.component';
import { CaCocktailsPanelComponent } from './modules/ca-cocktail/ca-cocktails-panel/ca-cocktails-panel.component';
import { CaCocktailDetailsComponent } from './modules/ca-cocktail/ca-cocktail-details/ca-cocktail-details.component';
import { CaBarwareDetailsComponent } from './modules/ca-barware/ca-barware-details/ca-barware-details.component';
import { CaGlasswareDetailsComponent } from './modules/ca-glassware/ca-glassware-details/ca-glassware-details.component';

export const routes: Routes = [
  {
    path: '',
    component: CaPostPanelComponent
  },
  {
    path: 'posts',
    component: CaPostPanelComponent
  },
  {
    path: 'cocktails',
    component: CaCocktailsPanelComponent
  },
  {
    path: 'cocktails/:id',
    component: CaCocktailDetailsComponent
  },
  {
    path: 'barwares',
    component: CaBarwareDetailsComponent
  },
  {
    path: 'glasswares',
    component: CaGlasswareDetailsComponent
  }
];
