import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CaBarware } from '../../ca-inventory/model/ca-barware.model';
import { CaBarwareDetailsService } from './ca-barware-details.service';

@Component({
  selector: 'app-ca-barware-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
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
