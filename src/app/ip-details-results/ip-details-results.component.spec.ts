import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDetailsResultsComponent } from './ip-details-results.component';

describe('IpDetailsResultsComponent', () => {
  let component: IpDetailsResultsComponent;
  let fixture: ComponentFixture<IpDetailsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpDetailsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpDetailsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
