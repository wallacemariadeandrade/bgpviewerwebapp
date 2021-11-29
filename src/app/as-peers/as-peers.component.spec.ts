import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPeersComponent } from './as-peers.component';

describe('AsPeersComponent', () => {
  let component: AsPeersComponent;
  let fixture: ComponentFixture<AsPeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
