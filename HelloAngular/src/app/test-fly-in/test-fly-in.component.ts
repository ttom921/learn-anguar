import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-test-fly-in',
  templateUrl: './test-fly-in.component.html',
  styleUrls: ['./test-fly-in.component.scss'],
  animations: [flyIn]
})
export class TestFlyInComponent implements OnInit {
  state: string;
  constructor() { }

  ngOnInit() {
  }

}
