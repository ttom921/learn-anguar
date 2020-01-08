import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.scss']
})
export class UnitTestComponent implements OnInit {
  title = "untestapp"
  constructor() { }

  ngOnInit() {
  }
  helloWorld() {
    return "Hello World";
  }
}
