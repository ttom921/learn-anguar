import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOne2t10Component } from './child-one2t10.component';

describe('ChildOne2t10Component', () => {
  let component: ChildOne2t10Component;
  let fixture: ComponentFixture<ChildOne2t10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOne2t10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOne2t10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
