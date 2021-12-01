import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixDetailsComponent } from './prefix-details.component';

describe('PrefixDetailsComponent', () => {
  let component: PrefixDetailsComponent;
  let fixture: ComponentFixture<PrefixDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
