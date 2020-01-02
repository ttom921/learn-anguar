import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRxjsHttpComponent } from './learn-rxjs-http.component';

describe('LearnRxjsHttpComponent', () => {
  let component: LearnRxjsHttpComponent;
  let fixture: ComponentFixture<LearnRxjsHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnRxjsHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnRxjsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
