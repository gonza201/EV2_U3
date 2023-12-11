import { TestBed } from '@angular/core/testing';

import { CrearEgresoService } from './crear-egreso.service';

describe('CrearEgresoService', () => {
  let service: CrearEgresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearEgresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
