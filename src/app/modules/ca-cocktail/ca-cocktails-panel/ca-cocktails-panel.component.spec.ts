import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCocktailsPanelComponent } from './ca-cocktails-panel.component';

describe('CaCocktailsPanelComponent', () => {
  let component: CaCocktailsPanelComponent;
  let fixture: ComponentFixture<CaCocktailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaCocktailsPanelComponent ]
    })
    .compileComponents();
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
