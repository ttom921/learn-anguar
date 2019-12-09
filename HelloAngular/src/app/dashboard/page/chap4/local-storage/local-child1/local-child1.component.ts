import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-child1',
  templateUrl: './local-child1.component.html',
  styleUrls: ['./local-child1.component.scss']
})
export class LocalChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  wirteData() {
    window.localStorage.setItem("json", JSON.stringify({ name: '大漠窮秋', age: 18 }));
  }
}
