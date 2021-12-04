import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForResultsComponent } from './search-for-results.component';

describe('SearchForResultsComponent', () => {
  let component: SearchForResultsComponent;
  let fixture: ComponentFixture<SearchForResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
