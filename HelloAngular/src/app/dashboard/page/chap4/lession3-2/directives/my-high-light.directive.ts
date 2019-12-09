import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[MyHighLight]'
})
export class MyHighLightDirective {

  @Input() highligtColor: string;
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouserEnter() {
    this.highlight(this.highligtColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
