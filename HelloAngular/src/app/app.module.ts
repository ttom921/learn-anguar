import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormQuickStartComponent } from './form-quick-start/form-quick-start.component';
import { ChineseMobileValidator } from './form-quick-start/directives/chinese-mobile-validator.directive';
import { UserRegisterComponent } from './user-register/user-register.component';
import { EqualValidator } from './user-register/equal-validator.directive';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormControlComponent } from './user-profile/dynamic-form/form-control.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserListService } from './service/user-list.service';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    FormQuickStartComponent,
    ChineseMobileValidator,
    UserRegisterComponent,
    EqualValidator,
    UserProfileComponent,
    FormControlComponent,
    UserListComponent,
    OrderListComponent,
    LearnRxjsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [UserListService],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [EqualValidator]
})
export class AppModule { }
