import { TestBed } from '@angular/core/testing';

import { PendientesService } from './Pendientes.service';

describe('PendientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendientesService = TestBed.get(PendientesService);
    expect(service).toBeTruthy();
  });
});
