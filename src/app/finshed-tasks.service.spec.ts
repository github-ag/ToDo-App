import { TestBed } from '@angular/core/testing';

import { FinshedTasksService } from './finshed-tasks.service';

describe('FinshedTasksService', () => {
  let service: FinshedTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinshedTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
