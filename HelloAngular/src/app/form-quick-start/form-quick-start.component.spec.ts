import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuickStartComponent } from './form-quick-start.component';

describe('FormQuickStartComponent', () => {
  let component: FormQuickStartComponent;
  let fixture: ComponentFixture<FormQuickStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormQuickStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQuickStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
