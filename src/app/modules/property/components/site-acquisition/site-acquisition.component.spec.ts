import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAcquisitionComponent } from './site-acquisition.component';

describe('SiteAcquisitionComponent', () => {
  let component: SiteAcquisitionComponent;
  let fixture: ComponentFixture<SiteAcquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAcquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
