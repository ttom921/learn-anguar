import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) { }
  @Input() set appDelay(time: number) {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
  }
}
