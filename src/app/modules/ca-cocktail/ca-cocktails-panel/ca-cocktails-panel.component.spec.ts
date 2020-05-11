import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCocktailsPanelComponent } from './ca-cocktails-panel.component';
import { CaCocktailsPanelService } from './ca-cocktails-panel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CaCocktailsPanelComponent', () => {
  let component: CaCocktailsPanelComponent;
  let fixture: ComponentFixture<CaCocktailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CaCocktailsPanelComponent],
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
