import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaCocktailsPanelComponent } from './ca-cocktails-panel/ca-cocktails-panel.component';
import { CaCocktailDetailsComponent } from './ca-cocktail-details/ca-cocktail-details.component';
import { CaSharedModule } from '../ca-shared/ca-shared.module';
import { CaCocktailRoutingModule } from './ca-cocktail-routing/ca-cocktail-routing.module';

@NgModule({
  declarations: [CaCocktailsPanelComponent, CaCocktailDetailsComponent],
  imports: [
    CommonModule,
    CaSharedModule,
    CaCocktailRoutingModule
  ],
  exports: [CaCocktailsPanelComponent, CaCocktailDetailsComponent]
})
export class CaCocktailModule {
}
