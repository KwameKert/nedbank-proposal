import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSiteAcquisitionComponent } from './view-site-acquisition.component';

describe('ViewSiteAcquisitionComponent', () => {
  let component: ViewSiteAcquisitionComponent;
  let fixture: ComponentFixture<ViewSiteAcquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSiteAcquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSiteAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
