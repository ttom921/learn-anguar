import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPreloadingStrategy } from './common/my-preloading-strategy';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MyPreloadingStrategy],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
