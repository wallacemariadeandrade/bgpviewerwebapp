import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPeersResultsComponent } from './as-peers-results.component';

describe('AsPeersResultsComponent', () => {
  let component: AsPeersResultsComponent;
  let fixture: ComponentFixture<AsPeersResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPeersResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsPeersResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
