import { Component, OnInit } from '@angular/core';
import {CaCocktailsPanelService} from './ca-cocktails-panel.service';
import {CaCocktail} from '../model/ca-cocktail.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-ca-cocktails-panel',
  templateUrl: './ca-cocktails-panel.component.html'
})
export class CaCocktailsPanelComponent implements OnInit {

  public _cocktails: CaCocktail[] = [];
  private unsubscribe: Subject<void> = new Subject();

  constructor(private caCocktailsPanelService: CaCocktailsPanelService) { }

  ngOnInit() {

    this.caCocktailsPanelService.loadCoctails()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((cocktails: CaCocktail[]) => {
        this._cocktails = cocktails;
    });
  }

}
