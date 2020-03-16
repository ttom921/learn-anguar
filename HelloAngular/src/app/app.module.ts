import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { MY_CONFIG_TOKEN, MY_CONFIG } from './my-config';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
