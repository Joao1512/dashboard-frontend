import { TestBed } from '@angular/core/testing';

import { ChartConcisedDataService } from './chart-concised-data.service';

describe('ChartConcisedDataService', () => {
  let service: ChartConcisedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartConcisedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
