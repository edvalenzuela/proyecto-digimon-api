import { TestBed } from '@angular/core/testing';

import { DigimonsService } from './digimons.service';

describe('DigimonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigimonsService = TestBed.get(DigimonsService);
    expect(service).toBeTruthy();
  });
});
