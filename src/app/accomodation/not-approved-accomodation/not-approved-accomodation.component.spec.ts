import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotApprovedAccomodationComponent } from './not-approved-accomodation.component';

describe('NotApprovedAccomodationComponent', () => {
  let component: NotApprovedAccomodationComponent;
  let fixture: ComponentFixture<NotApprovedAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotApprovedAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotApprovedAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
