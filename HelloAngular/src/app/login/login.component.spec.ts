import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
//for reactive form test
import { ReactiveFormsModule } from '@angular/forms';
// our isAuthenticated service.
import { DemoService } from '../service/demo.service';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HoverFocusDirective } from '../_directive/hover-focus.directive';
import { By } from '@angular/platform-browser';

xdescribe('LoginComponent', () => {
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
xdescribe('LoginCompoenet with mock', () => {
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
xdescribe('LoginCompoenet with mock extends', () => {
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
xdescribe('Mocking with real service with Spy', () => {
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
//---detect change
xdescribe('LoginComponent login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: DemoService;
  let el: DebugElement;//要使用它來query DOM
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [DemoService],

    })
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DemoService);
    el = fixture.debugElement;// debugElement
    fixture.detectChanges();
  });
  it('Should get login button and without logout button befor authenticated user', () => {
    const loginBTN = el.nativeElement.querySelector('button[type="submit"]');
    const logoutBTN = el.nativeElement.querySelector('#logoutBtn');
    //有login按鈕
    expect(loginBTN).toBeTruthy();

    //登入挾鈕文字為"登入"
    expect(loginBTN.textContent.trim()).toBe('登入');

    //沒有登出按鈕
    expect(logoutBTN).toBeNull();
  });
  it('should show user email, logout button and without login button after authenticated.', () => {
    const testEmail = 'clover@example.com';
    const testPass = 'abcd1234';
    //spyOn(service, 'isAuthenticated').and.returnValue(true);
    spyOn(service, 'asyncAuthecticated').and.returnValue(of(true).pipe(delay(3000)));
    component.formModel.patchValue({ email: testEmail, password: testPass });
    component.onSubmit();
    fixture.detectChanges();//重要

    const userEmail = el.nativeElement.querySelector('#userEmial');
    const loginBTN = el.nativeElement.querySelector('button[type="submit"]');
    const logoutBTN = el.nativeElement.querySelector('#logoutBtn');
    //顯示使用者的email
    expect(userEmail.textContent.trim()).toBe(testEmail);
    //有登出按鈕
    expect(logoutBTN).toBeTruthy();
    //沒有登入按鈕
    expect(loginBTN).toBeNull();
  });
});
//async test secton
xdescribe('Async testing authenticated', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: DemoService;
  let el: DebugElement;//要使用它來query DOM
  //創造一個假的demo service
  let fakeService = jasmine.createSpyObj('demo', ['asyncAuthecticated']);

  let spy = fakeService.asyncAuthecticated.and.returnValue(of(true).pipe(delay(3000)));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: DemoService, useValue: fakeService }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });
  //Jamine done function
  it('async testing via done:after authenticated should get email info,logout button and can not see lgoin button', (done: DoneFn) => {//重履
    const testEmail = 'clover@example.com';
    const testPass = 'adcd1234';
    component.formModel.patchValue({ email: testEmail, password: testPass });
    component.onSubmit();
    spy.calls.mostRecent().returnValue.subscribe(() => {
      fixture.detectChanges();
      const userEmail = el.nativeElement.querySelector('#userEmail');
      const loginBTN = el.nativeElement.querySelector('button[type="submit"]');
      const logoutBTN = el.nativeElement.querySelector('#logoutBtn');

      // 顯示使用者的email
      expect(userEmail.textContent.trim()).toBe(testEmail);
      //有登出按鈕
      expect(logoutBTN).toBeTruthy();
      done();//重要！別忘記加
    });
  });
  //fakeAsync() with tick()
  xit('async testing vi fakeAsync and tick', fakeAsync(() => {
    const testEmail = 'clover@example.com';
    const testPass = 'adcd1234';
    component.formModel.patchValue({ email: testEmail, password: testPass });

    tick(3000);//模擬非同步活動的時間流逝
    fixture.detectChanges();//更新 data binding

    const userEmail = el.nativeElement.querySelector('#userEmail');
    console.log('userEmail=>' + userEmail);
    const loginBTN = el.nativeElement.querySelector('button[type="submit"]');
    const logoutBTN = el.nativeElement.querySelector('#logoutBtn');
    console.log('logoutBTN=>' + logoutBTN);
    //顯示使用者的email
    expect(userEmail.textContent.trim()).toBe(testEmail);
    //有登出按鈕
    expect(logoutBTN).toBeTruthy();


  }));
  // wheStable
  it('async testing via WhenStable: after authenticated should get email info, logut button and can not find login button.',
    () => {
      const testEmail = 'clover@example.com';
      const testPass = 'abcd1234';
      component.formModel.patchValue({ email: testEmail, password: testPass });
      component.onSubmit();

      // whenStable testing way
      fixture.whenStable().then(() => {
        fixture.detectChanges();

        const userEmail = el.nativeElement.querySelector('#userEmail');
        const loginBTN = el.nativeElement.querySelector('button[type="submit"]');
        const logoutBTN = el.nativeElement.querySelector('#logoutBtn');

        // 顯示使用者的 email
        expect(userEmail.textContent.trim()).toBe(testEmail);

        // 有登出按鈕
        expect(logoutBTN).toBeTruthy();

        // 沒有登入按鈕
        expect(loginBTN).toBeNull();
      });
    });
});
describe('Test directive in LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: DemoService;
  let el: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent, HoverFocusDirective],
      imports: [ReactiveFormsModule],
      providers: [DemoService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DemoService);
    el = fixture.debugElement;
    fixture.detectChanges();
  });
  it('test hover focus directive on LoginComponent', () => {
    let titleEl = el.query(By.css('h4'));
    titleEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(titleEl.nativeElement.style.backgroundColor).toBe('yellow');

    titleEl.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(titleEl.nativeElement.style.backgroundColor).toBe('');
  });
});
