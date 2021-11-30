import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsDownstreamsComponent } from './as-downstreams.component';

describe('AsDownstreamsComponent', () => {
  let component: AsDownstreamsComponent;
  let fixture: ComponentFixture<AsDownstreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsDownstreamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsDownstreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
