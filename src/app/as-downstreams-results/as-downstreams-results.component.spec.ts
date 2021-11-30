import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsDownstreamsResultsComponent } from './as-downstreams-results.component';

describe('AsDownstreamsResultsComponent', () => {
  let component: AsDownstreamsResultsComponent;
  let fixture: ComponentFixture<AsDownstreamsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsDownstreamsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsDownstreamsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
