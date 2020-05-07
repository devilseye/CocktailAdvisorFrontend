import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaCocktailModule } from './modules/ca-cocktail/ca-cocktail.module';
import { CaSharedModule } from './modules/ca-shared/ca-shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CaCocktailCardComponent } from './modules/ca-cocktail/ca-cocktail-details/ca-cocktail-card/ca-cocktail-card.component';
import { CaPostPanelComponent } from './modules/ca-shared/ca-post-panel/ca-post-panel.component';
import { MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';

export const routeConfig: Routes = [
  {
    path: 'cocktails',
    component: CaCocktailCardComponent
  },
  {
    path: 'barware',
    component: CaPostPanelComponent
  },
  {
    path: 'glassware',
    component: CaPostPanelComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CaCocktailModule,
    CaSharedModule,
    RouterModule.forRoot(routeConfig),
    MatToolbarModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
