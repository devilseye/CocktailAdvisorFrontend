import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpUtilsService } from '../../ca-shared/http-utils.service';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../../ca-shared/model/routes';
import { catchError } from 'rxjs/operators';
import { CaGlassware } from '../../ca-inventory/model/ca-glassware.model';

@Injectable()
export class CaGlasswareDetailsService {
  constructor(private http: HttpClient,
              private httpUtilsService: HttpUtilsService) {
  }

  loadGlassware(): Observable<CaGlassware[]> {
    return this.http.get<CaGlassware[]>(ApiRoutes.getGlasswares)
        .pipe(
            catchError((errorResponse: HttpErrorResponse) =>
                this.httpUtilsService.handleError(errorResponse))
        );
  }
}
