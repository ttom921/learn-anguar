import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { ChildTwo2t10Component } from '../child-two2t10/child-two2t10.component';

@Component({
  selector: 'app-child-one2t10',
  templateUrl: './child-one2t10.component.html',
  styleUrls: ['./child-one2t10.component.scss']
})
export class ChildOne2t10Component implements OnInit, AfterContentInit {

  //注解的寫法
  @ContentChild(ChildTwo2t10Component) childtwo: ChildTwo2t10Component;
  constructor() { }

  ngOnInit() {
  }
  //在ngAfterContentInit鉤子里面訪問被投影進來的組件
  ngAfterContentInit(): void {
    console.log(this.childtwo);
    //這里還可以訪問 this.childtwo的public型方法，監聽 this.childtwo所派發出來的事件
  }

}
