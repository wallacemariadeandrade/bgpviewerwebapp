import { TestBed } from '@angular/core/testing';

import { AsService } from './as.service';

describe('AsService', () => {
  let service: AsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
