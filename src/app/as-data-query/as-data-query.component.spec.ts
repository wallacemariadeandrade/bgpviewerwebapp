import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsDataQueryComponent } from './as-data-query.component';

describe('AsDataQueryComponent', () => {
  let component: AsDataQueryComponent;
  let fixture: ComponentFixture<AsDataQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsDataQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsDataQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
