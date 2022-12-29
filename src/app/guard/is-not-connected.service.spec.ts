import { TestBed } from '@angular/core/testing';
import { IsNotConnectedService } from './is-not-connected.service';



describe('IsConnectedService', () => {
  let service: IsNotConnectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsNotConnectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
