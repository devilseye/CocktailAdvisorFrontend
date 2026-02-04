import { Component, Input } from '@angular/core';
import { CaSharedModule } from '../../ca-shared/ca-shared.module';
import { CaCocktail } from '../model/ca-cocktail.model';

@Component({
  selector: 'app-ca-cocktail-details',
  standalone: true,
  imports: [CaSharedModule],
  templateUrl: './ca-cocktail-details.component.html'
})
export class CaCocktailDetailsComponent {

  @Input()
  cocktail: CaCocktail;
}
