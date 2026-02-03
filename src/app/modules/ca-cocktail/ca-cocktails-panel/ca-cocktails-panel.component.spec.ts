import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCocktailsPanelComponent } from './ca-cocktails-panel.component';
import { CaCocktailsPanelService } from './ca-cocktails-panel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CaCocktailDetailsComponent } from '../ca-cocktail-details/ca-cocktail-details.component';
import { CaSharedModule } from '../../ca-shared/ca-shared.module';

describe('CaCocktailsPanelComponent', () => {
  let component: CaCocktailsPanelComponent;
  let fixture: ComponentFixture<CaCocktailsPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CaSharedModule],
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
