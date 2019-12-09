import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chil-one2a11',
  templateUrl: './chil-one2a11.component.html',
  styleUrls: ['./chil-one2a11.component.scss']
})
export class ChilOne2a11Component implements OnInit {

  id: string;
  @Input() title: string = "我是ChildOne";
  @Output() helloEvent = new EventEmitter<string>();
  constructor() {
    this.id = "ID-" + Math.floor(Math.random() * 100000000);
  }

  ngOnInit() {
  }
  sayHello() {
    this.helloEvent.emit(this.id);
  }
}
