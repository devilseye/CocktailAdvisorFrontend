import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpUtilsService } from '../../ca-shared/http-utils.service';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../../ca-shared/model/routes';
import { catchError } from 'rxjs/operators';
import { CaBarware } from '../../ca-inventory/model/ca-barware.model';

@Injectable()
export class CaBarwareDetailsService {
  private readonly http = inject(HttpClient);
  private readonly httpUtilsService = inject(HttpUtilsService);

  loadBarwares(): Observable<CaBarware[]> {
    return this.http.get<CaBarware[]>(ApiRoutes.getBarwares)
        .pipe(
            catchError((errorResponse: HttpErrorResponse) =>
                this.httpUtilsService.handleError(errorResponse))
        );
  }
}
