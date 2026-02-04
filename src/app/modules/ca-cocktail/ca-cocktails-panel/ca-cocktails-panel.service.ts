import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CaCocktail } from '../model/ca-cocktail.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpUtilsService } from '../../ca-shared/http-utils.service';
import { ApiRoutes } from '../../ca-shared/model/routes';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CaCocktailsPanelService {

  private readonly http = inject(HttpClient);
  private readonly httpUtilsService = inject(HttpUtilsService);

  loadCocktails(): Observable<CaCocktail[]> {
    return this.http.get<CaCocktail[]>(ApiRoutes.getCocktails)
        .pipe(
            catchError((errorResponse: HttpErrorResponse) =>
                this.httpUtilsService.handleError(errorResponse))
        );
  }
}
