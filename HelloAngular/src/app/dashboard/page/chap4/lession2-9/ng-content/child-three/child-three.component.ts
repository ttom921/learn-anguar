import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {
  @Output() sayhello = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  sayHello() {
    this.sayhello.emit("sayHello");
  }
}
