import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CaSharedModule } from '../../ca-shared/ca-shared.module';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CaBarware } from '../../ca-inventory/model/ca-barware.model';
import { CaBarwareDetailsService } from './ca-barware-details.service';

@Component({
  selector: 'app-ca-barware-details',
  standalone: true,
  imports: [CaSharedModule],
  templateUrl: './ca-barware-details.component.html',
  styleUrls: ['./ca-barware-details.component.scss'],
  providers: [CaBarwareDetailsService]
})
export class CaBarwareDetailsComponent implements OnInit, OnDestroy {

  barwares: CaBarware[] = [];
  private unsubscribe: Subject<void> = new Subject();
  private readonly caBarwareDetailsService = inject(CaBarwareDetailsService);

  ngOnInit() {

    this.caBarwareDetailsService.loadBarwares()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((barwares: CaBarware[]) => {
          this.barwares = barwares;
        });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
