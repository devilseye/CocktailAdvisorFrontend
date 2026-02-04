import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CaSharedModule } from '../../ca-shared/ca-shared.module';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CaGlasswareDetailsService } from './ca-glassware-details.service';
import { CaGlassware } from '../../ca-inventory/model/ca-glassware.model';

@Component({
  selector: 'app-ca-glassware-details',
  standalone: true,
  imports: [CaSharedModule],
  templateUrl: './ca-glassware-details.component.html',
  styleUrls: ['./ca-glassware-details.component.scss'],
  providers: [CaGlasswareDetailsService]
})
export class CaGlasswareDetailsComponent implements OnInit, OnDestroy {

  glasswares: CaGlassware[] = [];
  private unsubscribe: Subject<void> = new Subject();
  private readonly caGlasswareDetailsService = inject(CaGlasswareDetailsService);

  ngOnInit() {

    this.caGlasswareDetailsService.loadGlassware()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((glasswares: CaGlassware[]) => {
          this.glasswares = glasswares;
        });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
