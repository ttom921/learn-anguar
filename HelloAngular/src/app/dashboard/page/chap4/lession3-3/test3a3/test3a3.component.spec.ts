import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3a3Component } from './test3a3.component';

describe('Test3a3Component', () => {
  let component: Test3a3Component;
  let fixture: ComponentFixture<Test3a3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test3a3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3a3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
