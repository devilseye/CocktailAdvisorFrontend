import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPostPanelComponent } from './ca-post-panel.component';
import { CaPostPanelService } from './ca-post-panel.service';
import { of } from 'rxjs';
import { CaSharedModule } from '../ca-shared.module';

describe('CaPostPanelComponent', () => {
  let component: CaPostPanelComponent;
  let fixture: ComponentFixture<CaPostPanelComponent>;

  beforeEach(waitForAsync(() => {
    const caPostPanelServiceSpy =
        jasmine.createSpyObj('CaPostPanelService', ['loadPosts']);
    caPostPanelServiceSpy.loadPosts.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [CaSharedModule],
      providers: [{provide: CaPostPanelService, useValue: caPostPanelServiceSpy}]
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
