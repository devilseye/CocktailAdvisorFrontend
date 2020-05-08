import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaBarwareDetailsComponent } from './ca-barware-details.component';

describe('CaBarwareDetailsComponent', () => {
  let component: CaBarwareDetailsComponent;
  let fixture: ComponentFixture<CaBarwareDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaBarwareDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaBarwareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
