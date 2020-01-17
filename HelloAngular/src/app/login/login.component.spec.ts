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
