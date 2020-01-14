import { TestBed, inject } from '@angular/core/testing';

import { DemoService } from './demo.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemodependService } from './demodepend.service';

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
//for isAuthenticated test
describe('isAuthenticated testing', () => {
  let service: DemoService;
  beforeEach(() => {
    service = new DemoService(new DemodependService());
  });
  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });
  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

});
//-----------------------------------------------------------------
export class fakeService extends DemodependService {
  value = 'fake hello world';
}

describe('test with DI Demo service', () => {
  let service: DemoService;
  it('giveValue should return value from the real servie', () => {
    service = new DemoService(new DemodependService());
    expect(service.showDepValue()).toBe('Hello World');
  });
  it('getValue show return faked value form fakeServie', () => {
    service = new DemoService(new fakeService());
    expect(service.showDepValue()).toBe('fake hello world');
  });
  it('giveValue should return faked value form fake object', () => {
    const fake = { giveValue: () => 'fake object hello world' };
    service = new DemoService(fake as DemodependService);
    expect(service.showDepValue()).toBe('fake object hello world');
  });
  it('getValue should return return value form jasmine spyObj', () => {
    const depServSpy = jasmine.createSpyObj('DemodependService', ['giveValue']);
    const stubValue = 'stub value';
    depServSpy.giveValue.and.returnValue(stubValue);

    service = new DemoService(depServSpy);
    expect(service.showDepValue()).toBe('stub value');
    expect(depServSpy.giveValue.calls.count()).toBe(1, 'spy method was called once');
    expect(depServSpy.giveValue.calls.mostRecent().returnValue).toBe(stubValue);
  });


});

