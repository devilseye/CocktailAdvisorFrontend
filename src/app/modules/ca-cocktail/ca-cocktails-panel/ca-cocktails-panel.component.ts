import { Component, OnDestroy, OnInit } from '@angular/core';
import { CaCocktailsPanelService } from './ca-cocktails-panel.service';
import { CaCocktail } from '../model/ca-cocktail.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ca-cocktails-panel',
  templateUrl: './ca-cocktails-panel.component.html',
  providers: [CaCocktailsPanelService]
})
export class CaCocktailsPanelComponent implements OnInit, OnDestroy {

  cocktails: CaCocktail[] = [];
  private unsubscribe: Subject<void> = new Subject();

  constructor(private caCocktailsPanelService: CaCocktailsPanelService) { }

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
