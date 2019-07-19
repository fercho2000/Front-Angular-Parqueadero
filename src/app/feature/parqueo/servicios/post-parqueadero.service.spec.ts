import { TestBed } from '@angular/core/testing';

import { PostParqueaderoService } from './post-parqueadero.service';

describe('PostParqueaderoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostParqueaderoService = TestBed.get(PostParqueaderoService);
    expect(service).toBeTruthy();
  });
});
