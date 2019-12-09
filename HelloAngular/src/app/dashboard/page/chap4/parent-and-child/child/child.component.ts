import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() follow = new EventEmitter<string>();

  private _panelTitle: string = "我是子組件";
  @Input()
  public get panelTitle(): string {
    return this._panelTitle;
  }

  public set panelTitle(v: string) {
    this._panelTitle = v;
  }

  constructor() { }

  ngOnInit() {

  }
  childFn() {
    console.log("子組件的名字是->" + this.panelTitle)
  }
  emitAnEvent(event) {
    this.follow.emit("follow");//觸發follow事件的方式
  }

}
