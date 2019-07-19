import { TestBed } from '@angular/core/testing';

import { ListaParqueadosService } from './lista-parqueados.service';

describe('ListaParqueadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaParqueadosService = TestBed.get(ListaParqueadosService);
    expect(service).toBeTruthy();
  });
});
