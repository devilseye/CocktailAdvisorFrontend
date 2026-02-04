import { Routes } from '@angular/router';
import { CaPostPanelComponent } from './modules/ca-shared/ca-post-panel/ca-post-panel.component';

export const appRoutes: Routes = [
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
    loadChildren: () =>
      import('./modules/ca-cocktail/ca-cocktail.routes').then(
        m => m.cocktailRoutes
      )
  },
  {
    path: 'barwares',
    loadComponent: () =>
      import(
        './modules/ca-barware/ca-barware-details/ca-barware-details.component'
      ).then(m => m.CaBarwareDetailsComponent)
  },
  {
    path: 'glasswares',
    loadComponent: () =>
      import(
        './modules/ca-glassware/ca-glassware-details/ca-glassware-details.component'
      ).then(m => m.CaGlasswareDetailsComponent)
  }
];
