import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilOne2a11Component } from './chil-one2a11.component';

describe('ChilOne2a11Component', () => {
  let component: ChilOne2a11Component;
  let fixture: ComponentFixture<ChilOne2a11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilOne2a11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilOne2a11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
