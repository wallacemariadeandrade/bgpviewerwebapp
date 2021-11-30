import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsIxsResultsComponent } from './as-ixs-results.component';

describe('AsIxsResultsComponent', () => {
  let component: AsIxsResultsComponent;
  let fixture: ComponentFixture<AsIxsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsIxsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsIxsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
