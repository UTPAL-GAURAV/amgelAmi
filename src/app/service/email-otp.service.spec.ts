import { TestBed } from '@angular/core/testing';

import { EmailOTPService } from './email-otp.service';

describe('EmailOTPService', () => {
  let service: EmailOTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailOTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
