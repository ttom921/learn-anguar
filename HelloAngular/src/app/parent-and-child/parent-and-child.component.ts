import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.scss']
})
export class ParentAndChildComponent implements OnInit {

  @ViewChild('child', { static: true }) child: ElementRef
  constructor() { }

  ngOnInit() {
  }
  doSomething(ev: Event) {
    console.log("父組件收到event->" + ev);
  }
}
