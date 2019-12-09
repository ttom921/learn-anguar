import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-content2',
  templateUrl: './test-ng-content2.component.html',
  styleUrls: ['./test-ng-content2.component.scss']
})
export class TestNgContent2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doSomething(ev) {
    console.log(ev)

  }
}
