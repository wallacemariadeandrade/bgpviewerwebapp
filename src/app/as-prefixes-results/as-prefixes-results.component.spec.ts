import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPrefixesResultsComponent } from './as-prefixes-results.component';

describe('AsPrefixesResultsComponent', () => {
  let component: AsPrefixesResultsComponent;
  let fixture: ComponentFixture<AsPrefixesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPrefixesResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsPrefixesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
