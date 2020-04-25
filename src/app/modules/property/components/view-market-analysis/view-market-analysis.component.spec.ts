import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarketAnalysisComponent } from './view-market-analysis.component';

describe('ViewMarketAnalysisComponent', () => {
  let component: ViewMarketAnalysisComponent;
  let fixture: ComponentFixture<ViewMarketAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMarketAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarketAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
