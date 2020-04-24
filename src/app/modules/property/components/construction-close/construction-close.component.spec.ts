import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionCloseComponent } from './construction-close.component';

describe('ConstructionCloseComponent', () => {
  let component: ConstructionCloseComponent;
  let fixture: ComponentFixture<ConstructionCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
