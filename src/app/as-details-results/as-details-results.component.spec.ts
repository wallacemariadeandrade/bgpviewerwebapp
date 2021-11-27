import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsDetailsResultsComponent } from './as-details-results.component';

describe('AsDetailsResultsComponent', () => {
  let component: AsDetailsResultsComponent;
  let fixture: ComponentFixture<AsDetailsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsDetailsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsDetailsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
