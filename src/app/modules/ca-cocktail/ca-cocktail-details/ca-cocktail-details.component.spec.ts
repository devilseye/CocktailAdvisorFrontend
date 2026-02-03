import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCocktailDetailsComponent } from './ca-cocktail-details.component';
import { CaSharedModule } from '../../ca-shared/ca-shared.module';

describe('CaCocktailDetailsComponent', () => {
  let component: CaCocktailDetailsComponent;
  let fixture: ComponentFixture<CaCocktailDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CaCocktailDetailsComponent],
      imports: [CaSharedModule]
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
