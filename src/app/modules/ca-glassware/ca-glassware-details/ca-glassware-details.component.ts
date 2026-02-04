import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CaGlasswareDetailsService } from './ca-glassware-details.service';
import { CaGlassware } from '../../ca-inventory/model/ca-glassware.model';

@Component({
  selector: 'app-ca-glassware-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
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
