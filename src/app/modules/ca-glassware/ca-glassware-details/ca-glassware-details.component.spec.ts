import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaGlasswareDetailsComponent } from './ca-glassware-details.component';
import { CaGlasswareDetailsService } from './ca-glassware-details.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CaGlasswareDetailsComponent', () => {
  let component: CaGlasswareDetailsComponent;
  let fixture: ComponentFixture<CaGlasswareDetailsComponent>;

  beforeEach(async(() => {
    const caGlasswareDetailsServiceSpy =
        jasmine.createSpyObj('CaGlasswareDetailsService', ['loadGlassware']);
    caGlasswareDetailsServiceSpy.loadGlassware.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CaGlasswareDetailsComponent],
      providers: [{provide: CaGlasswareDetailsService, useValue: caGlasswareDetailsServiceSpy}]
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
