import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, AfterContentInit } from '@angular/core';
import { Child11Component } from './child11/child11.component';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit, AfterContentInit {

  //這里引用模板里面定義的dyncomp容器標籤
  @ViewChild("dyncomp", { static: true, read: ViewContainerRef }) dyncomp: ViewContainerRef;
  comp1: ComponentRef<Child11Component>;
  comp2: ComponentRef<Child11Component>;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) { }
  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log("動態創建組件的實例...");
    const childComp = this.resolver.resolveComponentFactory(Child11Component);
    this.comp1 = this.dyncomp.createComponent(childComp);
    this.comp1.instance.title = "111";
    this.comp1.instance.btnClick.subscribe((param) => {
      console.log("--->" + param);
    });
    //可以創建多個組件實例出來
    // let temp1 = this.dyncomp.createComponent(childComp);
    // temp1.instance.title = "第2个动态子组件";
    // let temp2 = this.dyncomp.createComponent(childComp);
    // temp2.instance.title = "第3个动态子组件";
    // let temp3 = this.dyncomp.createComponent(childComp);
    // temp3.instance.title = "第4个动态子组件";
    // let temp4 = this.dyncomp.createComponent(childComp);
    // temp4.instance.title = "第5个动态子组件";
    // let temp5 = this.dyncomp.createComponent(childComp, 0);
    // temp5.instance.title = "第6个动态子组件";

    this.comp2 = this.dyncomp.createComponent(childComp);
    this.comp2.instance.title = "第二個子組件";
    this.comp2.instance.btnClick.subscribe((param) => {
      console.log("--->" + param);
    });
  }
  destoryChild() {
    this.comp1.destroy();
    this.comp2.destroy();
  }
}
