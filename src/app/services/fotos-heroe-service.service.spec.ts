import { TestBed } from '@angular/core/testing';

import { FotosHeroeServiceService } from './fotos-heroe-service.service';

describe('FotosHeroeServiceService', () => {
  let service: FotosHeroeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotosHeroeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
