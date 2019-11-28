import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChilOne2a11Component } from '../chil-one2a11/chil-one2a11.component';

@Component({
  selector: 'app-test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements OnInit, AfterViewInit {


  @ViewChild(ChilOne2a11Component, { static: true }) childOne: ChilOne2a11Component;
  constructor() { }

  ngOnInit() {
  }
  //在ngAfterViewInit 這個鉤子里面可以直接訪問子組件
  ngAfterViewInit(): void {
    console.log(this.childOne);
    //用代碼的方式訂閱子組件上的事件
    this.childOne.helloEvent.subscribe(param => {
      console.log(param);
      console.log(this.childOne.title);
    });
  }

}
