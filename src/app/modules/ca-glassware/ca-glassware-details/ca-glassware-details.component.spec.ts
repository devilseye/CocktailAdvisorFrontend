import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaGlasswareDetailsComponent } from './ca-glassware-details.component';

describe('CaGlasswareDetailsComponent', () => {
  let component: CaGlasswareDetailsComponent;
  let fixture: ComponentFixture<CaGlasswareDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaGlasswareDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaGlasswareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
