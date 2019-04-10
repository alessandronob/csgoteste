import { TestBed } from '@angular/core/testing';

import { ListdbService } from './listdb.service';

describe('ListdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListdbService = TestBed.get(ListdbService);
    expect(service).toBeTruthy();
  });
});
