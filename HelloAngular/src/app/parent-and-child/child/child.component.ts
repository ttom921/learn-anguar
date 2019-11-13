import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  private _panelTitle: string = "我是子組件";

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
}
