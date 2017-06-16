import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccOdataComponent } from './search-acc-odata.component';

describe('SearchAccOdataComponent', () => {
  let component: SearchAccOdataComponent;
  let fixture: ComponentFixture<SearchAccOdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAccOdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAccOdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
