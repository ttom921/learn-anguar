import { HoverFocusDirective } from './hover-focus.directive';
import { ElementRef, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<h1 id='title'>Hello World</h1>`,
})
class TestHoverFocusComponent { }
xdescribe('HoverFocusDirective', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let el: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, HoverFocusDirective],
    });
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    // //這邊注意！改用By這個Angular提供的套件
    // titleEl = fixture.debugElement.query(By.css('#title'));
  });

  it('should create an instance', () => {
    const directive = new HoverFocusDirective(el);
    expect(directive).toBeTruthy();
  });
  it('hovering over title', () => {
    let titleEl = el.query(By.css('#title'));
    titleEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(titleEl.nativeElement.style.backgroundColor).toBe('yellow');
    titleEl.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(titleEl.nativeElement.style.backgroundColor).toBe('');
  });

});
