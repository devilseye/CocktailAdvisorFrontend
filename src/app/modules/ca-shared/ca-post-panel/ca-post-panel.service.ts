import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaPost } from '../model/ca-post.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiRoutes } from '../model/routes';
import { catchError } from 'rxjs/operators';
import { HttpUtilsService } from '../http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class CaPostPanelService {
  constructor(private http: HttpClient,
              private httpUtilsService: HttpUtilsService) {
  }

  loadPosts(): Observable<CaPost[]> {
    return this.http.get<CaPost[]>(ApiRoutes.getPosts)
        .pipe(
            catchError((errorResponse: HttpErrorResponse) =>
                this.httpUtilsService.handleError(errorResponse))
        );
  }

  //todo implementation is required
  public getPostLikes(post: CaPost): string {
    return '44';
  }
}
