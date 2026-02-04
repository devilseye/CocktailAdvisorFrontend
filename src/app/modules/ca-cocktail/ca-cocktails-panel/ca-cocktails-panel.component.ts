import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CaCocktailsPanelService } from './ca-cocktails-panel.service';
import { CaCocktail } from '../model/ca-cocktail.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CaCocktailDetailsComponent } from '../ca-cocktail-details/ca-cocktail-details.component';

@Component({
  selector: 'app-ca-cocktails-panel',
  standalone: true,
  imports: [CaCocktailDetailsComponent, CommonModule, MatDividerModule],
  templateUrl: './ca-cocktails-panel.component.html',
  providers: [CaCocktailsPanelService]
})
export class CaCocktailsPanelComponent implements OnInit, OnDestroy {

  cocktails: CaCocktail[] = [];
  private unsubscribe: Subject<void> = new Subject();
  private readonly caCocktailsPanelService = inject(CaCocktailsPanelService);

  ngOnInit() {

    this.caCocktailsPanelService.loadCocktails()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((cocktails: CaCocktail[]) => {
        this.cocktails = cocktails;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
