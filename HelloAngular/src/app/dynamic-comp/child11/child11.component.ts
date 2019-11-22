import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.scss']
})
export class Child11Component implements OnInit {

  @Input() title: string = "默認的標題";

  @Output() btnClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  triggerEvent() {
    this.btnClick.emit(`${this.title}子組件的點擊事件....`);
  }
}
