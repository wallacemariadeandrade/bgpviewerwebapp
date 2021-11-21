import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSelectionComponent } from './api-selection.component';

describe('ApiSelectionComponent', () => {
  let component: ApiSelectionComponent;
  let fixture: ComponentFixture<ApiSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
