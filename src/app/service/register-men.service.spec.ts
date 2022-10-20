import { TestBed } from '@angular/core/testing';

import { RegisterMenService } from './register-men.service';

describe('RegisterMenService', () => {
  let service: RegisterMenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterMenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
