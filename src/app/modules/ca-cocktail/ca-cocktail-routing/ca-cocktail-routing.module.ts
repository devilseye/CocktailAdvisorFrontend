import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CaCocktailsPanelComponent } from '../ca-cocktails-panel/ca-cocktails-panel.component';
import { CaCocktailDetailsComponent } from '../ca-cocktail-details/ca-cocktail-details.component';

const routes: Routes = [
  {
    path: '',
    component: CaCocktailsPanelComponent
  },
  {
    path: 'cocktails/:id',
    component: CaCocktailDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaCocktailRoutingModule {
}
