import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinancingComponent } from './view-financing.component';

describe('ViewFinancingComponent', () => {
  let component: ViewFinancingComponent;
  let fixture: ComponentFixture<ViewFinancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFinancingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
