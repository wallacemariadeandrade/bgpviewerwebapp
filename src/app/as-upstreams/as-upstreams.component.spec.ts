import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsUpstreamsComponent } from './as-upstreams.component';

describe('AsUpstreamsComponent', () => {
  let component: AsUpstreamsComponent;
  let fixture: ComponentFixture<AsUpstreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsUpstreamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsUpstreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
