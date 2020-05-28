import { TestBed } from '@angular/core/testing';

import { UbuntuserviceService } from './ubuntuservice.service';

describe('UbuntuserviceService', () => {
  let service: UbuntuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbuntuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
