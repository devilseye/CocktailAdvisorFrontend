import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CaCocktail} from '../model/ca-cocktail.model';

@Injectable()
export class CaCocktailsPanelService {

  private stubCocktails: CaCocktail[] = [{
    id: '1', name: 'Uno', description: 'The first test cocktail.',
    algorithm: '1 Go to your kitchen \n 2 Open the bottle \n 3 Drink!'
  } as CaCocktail];

  loadCocktails(): Observable<CaCocktail[]> {
    return of(this.stubCocktails);
  }
}
