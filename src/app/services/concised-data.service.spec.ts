import { TestBed } from '@angular/core/testing';

import { ConcisedDataService } from './concised-data.service';

describe('ConcisedDataService', () => {
  let service: ConcisedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcisedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
