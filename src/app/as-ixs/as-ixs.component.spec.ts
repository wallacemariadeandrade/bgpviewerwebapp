import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsIxsComponent } from './as-ixs.component';

describe('AsIxsComponent', () => {
  let component: AsIxsComponent;
  let fixture: ComponentFixture<AsIxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsIxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsIxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
