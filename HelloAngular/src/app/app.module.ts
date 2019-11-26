import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child1/child1.component';
import { Child2Component } from './brother/child2/child2.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { LocalChild2Component } from './local-storage/local-child2/local-child2.component';
import { LocalChild1Component } from './local-storage/local-child1/local-child1.component';
import { TestFlyInComponent } from './test-fly-in/test-fly-in.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { Child11Component } from './dynamic-comp/child11/child11.component';
import { ShadowDomModeComponent } from './lession2-8/shadow-dom-mode/shadow-dom-mode.component';
import { EmulateModeComponent } from './lession2-8/emulate-mode/emulate-mode.component';
import { NoneModeComponent } from './lession2-8/none-mode/none-mode.component';
import { TestNgContentComponent } from './lession2-9/test-ng-content/test-ng-content.component';
import { ChildOneComponent } from './lession2-9/child-one/child-one.component';
import { TestNgContent2Component } from './lession2-9/ng-content/test-ng-content2/test-ng-content2.component';
import { ChildTwoComponent } from './lession2-9/ng-content/child-two/child-two.component';
import { ChildThreeComponent } from './lession2-9/ng-content/child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInterpolationComponent,
    ParentAndChildComponent,
    ChildComponent,
    BrotherComponent,
    Child1Component,
    Child2Component,

    LocalStorageComponent,
    LocalChild1Component,
    LocalChild2Component,
    TestFlyInComponent,
    DynamicCompComponent,
    Child11Component,
    ShadowDomModeComponent,
    EmulateModeComponent,
    NoneModeComponent,
    TestNgContentComponent,
    ChildOneComponent,
    TestNgContent2Component,
    ChildTwoComponent,
    ChildThreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Child11Component]
})
export class AppModule { }
