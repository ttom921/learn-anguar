import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgContent2Component } from './test-ng-content2.component';

describe('TestNgContent2Component', () => {
  let component: TestNgContent2Component;
  let fixture: ComponentFixture<TestNgContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
