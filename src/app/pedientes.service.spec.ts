import { TestBed } from '@angular/core/testing';

import { PedientesService } from './Pedientes.service';

describe('PedientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedientesService = TestBed.get(PedientesService);
    expect(service).toBeTruthy();
  });
});
