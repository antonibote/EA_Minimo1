import { TestBed } from '@angular/core/testing';

import { FaqserviceService } from './faqservice.service';

describe('FaqserviceService', () => {
  let service: FaqserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
