/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieService } from './movie.service';

describe('Service: Movie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService]
    });
  });

  it('should ...', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
