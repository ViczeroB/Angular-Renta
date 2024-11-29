import { TestBed } from '@angular/core/testing';

import { ApiCasaService } from './api-casa.service';

describe('ApiCasaService', () => {
  let service: ApiCasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
