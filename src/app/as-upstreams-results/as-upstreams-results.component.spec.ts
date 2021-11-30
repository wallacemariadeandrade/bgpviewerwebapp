import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsUpstreamsResultsComponent } from './as-upstreams-results.component';

describe('AsUpstreamsResultsComponent', () => {
  let component: AsUpstreamsResultsComponent;
  let fixture: ComponentFixture<AsUpstreamsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsUpstreamsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsUpstreamsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
