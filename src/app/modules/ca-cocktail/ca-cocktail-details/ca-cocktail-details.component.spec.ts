import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCocktailDetailsComponent } from './ca-cocktail-details.component';

describe('CaCocktailDetailsComponent', () => {
  let component: CaCocktailDetailsComponent;
  let fixture: ComponentFixture<CaCocktailDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaCocktailDetailsComponent]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaCocktailDetailsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // TODO fix this line
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
