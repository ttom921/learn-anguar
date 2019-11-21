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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
