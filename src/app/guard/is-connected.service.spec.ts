import { TestBed } from '@angular/core/testing';

import { IsConnectedService } from './is-connected.service';

describe('IsConnectedService', () => {
  let service: IsConnectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsConnectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
