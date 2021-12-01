import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPrefixesComponent } from './as-prefixes.component';

describe('AsPrefixesComponent', () => {
  let component: AsPrefixesComponent;
  let fixture: ComponentFixture<AsPrefixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPrefixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsPrefixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
