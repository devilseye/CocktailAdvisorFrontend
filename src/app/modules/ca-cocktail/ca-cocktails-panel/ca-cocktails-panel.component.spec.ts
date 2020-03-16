import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCocktailsPanelComponent } from './ca-cocktails-panel.component';
import { CaCocktailDetailsComponent } from '../ca-cocktail-details/ca-cocktail-details.component';
import { CaCocktailsPanelService } from './ca-cocktails-panel.service';

describe('CaCocktailsPanelComponent', () => {
  let component: CaCocktailsPanelComponent;
  let fixture: ComponentFixture<CaCocktailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaCocktailsPanelComponent, CaCocktailDetailsComponent],
      providers: [CaCocktailsPanelService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaCocktailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
