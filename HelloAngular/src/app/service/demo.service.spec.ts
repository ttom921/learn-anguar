import { TestBed, inject } from '@angular/core/testing';

import { DemoService } from './demo.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('DemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DemoService],
  }));

  it('should be created', () => {
    const service: DemoService = TestBed.get(DemoService);
    expect(service).toBeTruthy();
  });
  // it('should be created by inject', inject([DemoService], (service: DemoService) => {
  //   expect(service).toBeTruthy();
  // }));
  it('Should return "Hi Clover" when call getValue', () => {
    let service: DemoService = TestBed.get(DemoService);
    expect(service.getValue()).toBe('Hi Clover');
  });
  it('should return "promise Clover" call getPromiseValue()', () => {
    let service: DemoService = TestBed.get(DemoService);
    service.getPromiseValue().then(value => {
      expect(value).toBe("promise value");
    });
  });
  it('should return "obserable Clover" call getObservableValue()', () => {
    let service: DemoService = TestBed.get(DemoService);
    service.getObservableValue().subscribe(value => {
      expect(value).toBe("observable Clover");
    });
  });


});
