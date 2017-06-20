import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationDetailedComponent } from './accomodation-detailed.component';

describe('AccomodationDetailedComponent', () => {
  let component: AccomodationDetailedComponent;
  let fixture: ComponentFixture<AccomodationDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
