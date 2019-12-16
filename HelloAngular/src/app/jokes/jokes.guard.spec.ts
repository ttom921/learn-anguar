import { TestBed, async, inject } from '@angular/core/testing';

import { JokesGuard } from './jokes.guard';

describe('JokesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokesGuard]
    });
  });

  it('should ...', inject([JokesGuard], (guard: JokesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
