import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaCocktailModule } from './modules/ca-cocktail/ca-cocktail.module';
import { CaSharedModule } from './modules/ca-shared/ca-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CaBarwareModule } from './modules/ca-barware/ca-barware.module';
import { CaGlasswareModule } from './modules/ca-glassware/ca-glassware.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CaCocktailModule,
    CaSharedModule,
    CaBarwareModule,
    CaGlasswareModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
