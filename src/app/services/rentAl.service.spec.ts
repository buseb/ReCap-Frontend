import { TestBed } from '@angular/core/testing';

import { RentalService } from './rentAl.service';

describe('RentAlService', () => {
  let service: RentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
