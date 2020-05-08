import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaPostPanelComponent } from './modules/ca-shared/ca-post-panel/ca-post-panel.component';
import { CaCocktailsPanelComponent } from './modules/ca-cocktail/ca-cocktails-panel/ca-cocktails-panel.component';

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
    loadChildren: () => import('./modules/ca-cocktail/ca-cocktail.module').then(m => m.CaCocktailModule)
  },
  {
    path: 'barwares',
    loadChildren: () => import('./modules/ca-barware/ca-barware.module').then(m => m.CaBarwareModule)
  },
  {
    path: 'glasswares',
    loadChildren: () => import('./modules/ca-glassware/ca-glassware.module').then(m => m.CaGlasswareModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
