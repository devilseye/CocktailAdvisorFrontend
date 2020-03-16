import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CaCocktail } from '../model/ca-cocktail.model';

@Injectable()
export class CaCocktailsPanelService {

  loadCocktails(): Observable<CaCocktail[]> {
    return of([]);
  }
}
