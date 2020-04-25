import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConstructionCloseComponent } from './view-construction-close.component';

describe('ViewConstructionCloseComponent', () => {
  let component: ViewConstructionCloseComponent;
  let fixture: ComponentFixture<ViewConstructionCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConstructionCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConstructionCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
