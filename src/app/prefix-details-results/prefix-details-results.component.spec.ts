import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixDetailsResultsComponent } from './prefix-details-results.component';

describe('PrefixDetailsResultsComponent', () => {
  let component: PrefixDetailsResultsComponent;
  let fixture: ComponentFixture<PrefixDetailsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixDetailsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixDetailsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
