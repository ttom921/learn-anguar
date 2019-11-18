import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-child2',
  templateUrl: './local-child2.component.html',
  styleUrls: ['./local-child2.component.scss']
})
export class LocalChild2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  readData() {
    let json = window.localStorage.getItem("json");
    window.localStorage.removeItem("json");
    let obj = JSON.parse(json);
    console.log(obj.name);
    console.log(obj.age);
  }
}
