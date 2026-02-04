import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CaPost } from '../model/ca-post.model';
import { CaPostPanelService } from './ca-post-panel.service';

@Component({
  selector: 'app-ca-post-panel',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatButtonModule, MatCardModule],
  templateUrl: './ca-post-panel.component.html'
})
export class CaPostPanelComponent implements OnInit, OnDestroy {

  posts: CaPost[] = [];
  private unsubscribe: Subject<void> = new Subject();
  readonly caPostPanelService = inject(CaPostPanelService);

  ngOnInit() {

    this.caPostPanelService.loadPosts()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((posts: CaPost[]) => {
        this.posts = posts;
      });
  }

  getPostLink(post: CaPost): string {
    return post.category + '/' + post.id;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
