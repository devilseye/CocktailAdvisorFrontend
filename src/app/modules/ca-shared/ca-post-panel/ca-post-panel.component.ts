import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CaSharedModule } from '../ca-shared.module';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CaPost } from '../model/ca-post.model';
import { CaPostPanelService } from './ca-post-panel.service';

@Component({
  selector: 'app-ca-post-panel',
  standalone: true,
  imports: [CaSharedModule],
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
