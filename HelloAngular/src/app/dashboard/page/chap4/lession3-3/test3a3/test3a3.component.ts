import { Component, OnInit, Input, ElementRef, AfterContentInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-test3a3',
  templateUrl: './test3a3.component.html',
  styleUrls: ['./test3a3.component.scss']
})
export class Test3a3Component implements OnInit, AfterContentInit {


  @Input() highlightColor: string;
  private containerEl: any;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.childNodes);
    console.log(this.el.nativeElement.childNodes[0]);
    console.log(this.el.nativeElement.innerHTML);

    this.containerEl = this.el.nativeElement.childNodes[0];
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.containerEl.style.backgroundColor = color;
  }

}
