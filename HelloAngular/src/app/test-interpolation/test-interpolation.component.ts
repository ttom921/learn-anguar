import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-interpolation',
  templateUrl: './test-interpolation.component.html',
  styleUrls: ['./test-interpolation.component.scss']
})
export class TestInterpolationComponent implements OnInit {
  title = "假的星際爭霸2";
  imgSrc: string = "./assets/imgs/1.jpg";
  fontSizePx: number = 48;
  constructor() { }

  ngOnInit() {
  }
  getVal(): any {
    return 65535;
  }
  sayHello(name: string) {
    alert(name);
  }
  btnClick(event): void {
    alert("測試事件綁定");
  }
}
