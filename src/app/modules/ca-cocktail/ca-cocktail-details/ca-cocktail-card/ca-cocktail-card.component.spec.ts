import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCocktailCardComponent } from './ca-cocktail-card.component';

describe('CaCocktailCardComponent', () => {
  let component: CaCocktailCardComponent;
  let fixture: ComponentFixture<CaCocktailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaCocktailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaCocktailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
