import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormQuickStartComponent } from './form-quick-start/form-quick-start.component';
import { ChineseMobileValidator } from './form-quick-start/directives/chinese-mobile-validator.directive';
import { UserRegisterComponent } from './user-register/user-register.component';
import { EqualValidator } from './user-register/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormQuickStartComponent,
    ChineseMobileValidator,
    UserRegisterComponent,
    EqualValidator,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [EqualValidator]
})
export class AppModule { }
