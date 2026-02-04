import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { CaCocktail } from '../model/ca-cocktail.model';

@Component({
  selector: 'app-ca-cocktail-details',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatStepperModule
  ],
  templateUrl: './ca-cocktail-details.component.html'
})
export class CaCocktailDetailsComponent {

  @Input()
  cocktail: CaCocktail;
}
