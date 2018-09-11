import { TestBed, inject } from '@angular/core/testing';

import { MyHttpInterceptorService } from './my-http-interceptor.service';

describe('MyHttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyHttpInterceptorService]
    });
  });

  it('should be created', inject([MyHttpInterceptorService], (service: MyHttpInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
