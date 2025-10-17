import { TestBed } from '@angular/core/testing';

import { MachineData } from './machine-data';

describe('MachineData', () => {
  let service: MachineData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
