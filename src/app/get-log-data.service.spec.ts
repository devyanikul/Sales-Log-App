import { TestBed } from '@angular/core/testing';

import { GetLogDataService } from './get-log-data.service';

describe('GetLogDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLogDataService = TestBed.get(GetLogDataService);
    expect(service).toBeTruthy();
  });
});
