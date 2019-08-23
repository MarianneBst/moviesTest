import { TestBed, async, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


describe('MovieService', () => {
  let serviceMovie: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientModule],
      }
    );
    serviceMovie = TestBed.get(MovieService);
  });

  it('should be created', () => {
    expect(serviceMovie).toBeTruthy();
  });

  it('should return 99 lines', async(inject([MovieService], (service) => {
    service.getMovies().subscribe(
      result => {
        console.log(result);
        expect(result.length).toEqual(99);
      });
  })));


});
