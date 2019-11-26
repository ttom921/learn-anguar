import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  @Output() myEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sayHello() {
    this.myEvent.emit("被投影的子組件也可以發射事件…");
  }
}
