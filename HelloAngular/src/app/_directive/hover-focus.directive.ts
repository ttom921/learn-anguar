import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverFocus]'
})
export class HoverFocusDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight(null);
  }
  private hightlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
