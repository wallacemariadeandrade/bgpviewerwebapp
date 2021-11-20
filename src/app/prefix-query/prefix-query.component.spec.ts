import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixQueryComponent } from './prefix-query.component';

describe('PrefixQueryComponent', () => {
  let component: PrefixQueryComponent;
  let fixture: ComponentFixture<PrefixQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
