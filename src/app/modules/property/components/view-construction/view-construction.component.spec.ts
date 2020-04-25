import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConstructionComponent } from './view-construction.component';

describe('ViewConstructionComponent', () => {
  let component: ViewConstructionComponent;
  let fixture: ComponentFixture<ViewConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
