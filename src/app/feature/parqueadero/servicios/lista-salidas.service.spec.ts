import { TestBed } from '@angular/core/testing';

import { ListaSalidasService } from './lista-salidas.service';

describe('ListaSalidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaSalidasService = TestBed.get(ListaSalidasService);
    expect(service).toBeTruthy();
  });
});
