import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedAngularMaterialModule } from '../share/shared-angular-material/shared-angular-material.module';
import { DashboardComponent } from './dashboard.component';
import { TestShowPageComponent } from './page/test-show-page/test-show-page.component';
import { Test3a3Component } from './page/chap4/lession3-3/test3a3/test3a3.component';
import { CardComponent } from './page/chap4/lession3-2/card/card.component';
import { DelayDirective } from './page/chap4/lession3-2/directives/delay.directive';
import { MyHighLightDirective } from './page/chap4/lession3-2/directives/my-high-light.directive';
import { TestViewChildComponent } from './page/chap4/lession2-11/test-view-child/test-view-child.component';
import { ChilOne2a11Component } from './page/chap4/lession2-11/chil-one2a11/chil-one2a11.component';
import { TestContentChildComponent } from './page/chap4/lession2-10/test-content-child/test-content-child.component';
import { ChildTwo2t10Component } from './page/chap4/lession2-10/child-two2t10/child-two2t10.component';
import { ChildOne2t10Component } from './page/chap4/lession2-10/child-one2t10/child-one2t10.component';
import { TestNgContent2Component } from './page/chap4/lession2-9/ng-content/test-ng-content2/test-ng-content2.component';
import { ChildTwoComponent } from './page/chap4/lession2-9/ng-content/child-two/child-two.component';
import { ChildThreeComponent } from './page/chap4/lession2-9/ng-content/child-three/child-three.component';
import { TestNgContentComponent } from './page/chap4/lession2-9/test-ng-content/test-ng-content.component';
import { ChildOneComponent } from './page/chap4/lession2-9/child-one/child-one.component';
import { ShadowDomModeComponent } from './page/chap4/lession2-8/shadow-dom-mode/shadow-dom-mode.component';
import { NoneModeComponent } from './page/chap4/lession2-8/none-mode/none-mode.component';
import { EmulateModeComponent } from './page/chap4/lession2-8/emulate-mode/emulate-mode.component';
import { DynamicCompComponent } from './page/chap4/dynamic-comp/dynamic-comp.component';
import { Child11Component } from './page/chap4/dynamic-comp/child11/child11.component';
import { TestFlyInComponent } from './page/chap4/test-fly-in/test-fly-in.component';
import { LocalStorageComponent } from './page/chap4/local-storage/local-storage.component';
import { LocalChild1Component } from './page/chap4/local-storage/local-child1/local-child1.component';
import { LocalChild2Component } from './page/chap4/local-storage/local-child2/local-child2.component';
import { BrotherComponent } from './page/chap4/brother/brother.component';
import { Child2Component } from './page/chap4/brother/child2/child2.component';
import { Child1Component } from './page/chap4/brother/child1/child1.component';
import { ParentAndChildComponent } from './page/chap4/parent-and-child/parent-and-child.component';
import { ChildComponent } from './page/chap4/parent-and-child/child/child.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    TestShowPageComponent,

    ChildComponent,
    ParentAndChildComponent,

    Child1Component,
    Child2Component,
    BrotherComponent,

    LocalChild1Component,
    LocalChild2Component,
    LocalStorageComponent,

    TestFlyInComponent,
    Child11Component,
    DynamicCompComponent,

    EmulateModeComponent,
    NoneModeComponent,
    ShadowDomModeComponent,
    ChildOneComponent,
    TestNgContentComponent,
    ChildThreeComponent,
    ChildTwoComponent,
    TestNgContent2Component,
    ChildOne2t10Component,
    ChildTwo2t10Component,
    TestContentChildComponent,
    ChilOne2a11Component,
    TestViewChildComponent,
    MyHighLightDirective,
    DelayDirective,
    CardComponent,
    Test3a3Component,

  ],
  imports: [
    SharedAngularMaterialModule,
    DashboardRoutingModule
  ],
  exports: [
    SharedAngularMaterialModule,
    DashboardRoutingModule
  ],
  entryComponents: [Child11Component]
})
export class DashboardModule { }
