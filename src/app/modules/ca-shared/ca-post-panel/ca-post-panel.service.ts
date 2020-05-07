import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CaCategory, CaPost } from '../model/ca-post.model';

@Injectable({
  providedIn: 'root'
})
export class CaPostPanelService {

  private stubPosts: CaPost[] = [{
    id: '1',
    imageLink: '',
    title: 'Uno',
    category: CaCategory.COCKTAIL,
    summary: 'First cocktail in the thread'}] as CaPost[];

  loadPosts(): Observable<CaPost[]> {
    return of(this.stubPosts);
  }
}
