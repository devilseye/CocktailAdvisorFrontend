import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPostPanelComponent } from './ca-post-panel.component';

describe('CaPostPanelComponent', () => {
  let component: CaPostPanelComponent;
  let fixture: ComponentFixture<CaPostPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaPostPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaPostPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
