import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwo2t10Component } from './child-two2t10.component';

describe('ChildTwo2t10Component', () => {
  let component: ChildTwo2t10Component;
  let fixture: ComponentFixture<ChildTwo2t10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTwo2t10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTwo2t10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
