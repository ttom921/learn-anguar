import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
//for reactive form test
import { ReactiveFormsModule } from '@angular/forms';
// our isAuthenticated service.
import { DemoService } from '../service/demo.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: DemoService;// for isAuthenticated test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],// for Reactive Form
      providers: [DemoService]// for isAuthenticated test
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DemoService);
    fixture.detectChanges();
  });
  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //使用真實的isAuthenticated
  it('should login failed when user is not authenticated', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
  //使用真實的isAuthenticated
  it('should login success when token object exist', () => {
    localStorage.setItem('token', '12345');
    expect(service.isAuthenticated()).toBeTruthy();
  });

});
//--- Mocking with fake Class---
class MockAuthService {
  authenticated = false;
  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
describe('LoginCompoenet with mock', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: MockAuthService;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [MockAuthService]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(MockAuthService);
    fixture.detectChanges();
  });
  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  it('should login failed when user is not authenticated', () => {
    service.authenticated = false;
    expect(service.isAuthenticated()).toBeFalsy();
  });
  it('should login success when user is authenticatrd', () => {
    service.authenticated = true;
    expect(service.isAuthenticated()).toBeTruthy();
  });
});
//--- Mocking by overriding functions----
class MockAuthServiceExt extends DemoService {
  authenticated = false;
  isAuthenticated() {
    return this.authenticated;
  }
}
describe('LoginCompoenet with mock extends', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: MockAuthServiceExt;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [MockAuthServiceExt]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(MockAuthServiceExt);
    fixture.detectChanges();
  });
  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  it('should login failed when user is not authenticatrd', () => {
    service.authenticated = false;
    expect(service.isAuthenticated()).toBeFalsy();
  });
  it('should login success when user is authenticatrd', () => {
    service.authenticated = true;
    expect(service.isAuthenticated()).toBeTruthy();
  });
});
//----Mocking with real service with Spy----
describe('Mocking with real service with Spy', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: DemoService;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [DemoService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DemoService);
    fixture.detectChanges();
  });
  it('should login success whtn user is authenticated', () => {
    //SpyOn
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(service.isAuthenticated()).toBeTruthy();
  });
  it('should login failed when user is no authenticated', () => {
    //SpyOn
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(service.isAuthenticated()).toBeFalsy();
  });

});
