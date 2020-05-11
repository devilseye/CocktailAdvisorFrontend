import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaBarwareDetailsComponent } from './ca-barware-details.component';
import { of } from 'rxjs';
import { CaBarwareDetailsService } from './ca-barware-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CaBarwareDetailsComponent', () => {
  let component: CaBarwareDetailsComponent;
  let fixture: ComponentFixture<CaBarwareDetailsComponent>;

  beforeEach(async(() => {
    const spyBarwareDetailsServiceSpy =
        jasmine.createSpyObj('CaBarwareDetailsService', ['loadBarwares']);
    spyBarwareDetailsServiceSpy.loadBarwares.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [CaBarwareDetailsComponent],
      providers: [{ provide: CaBarwareDetailsService, useValue: spyBarwareDetailsServiceSpy }]
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
